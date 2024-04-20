from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
import crud
from models import SessionLocal
import schemas
from fastapi.security import OAuth2AuthorizationCodeBearer, OAuth2PasswordBearer
import requests
from datetime import datetime, timedelta
from jose import JWTError, jwt
from fastapi import Security

app = FastAPI()

CLIENT_ID = "713793987872-r85er720pga3vjlmejmg5qfvp5qde794.apps.googleusercontent.com"
CLIENT_SECRET = "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"
REDIRECT_URI = "http://localhost:8000/auth/callback"

# Секретный ключ для подписи JWT токена
SECRET_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4ifQ.VEOeVcNR_vsw_JanGjDQlVeHxlMUgyvpza475d_bHKE"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Экземпляр OAuth2PasswordBearer для извлечения токена из запроса
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Функция для создания JWT токена
def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Dependency для получения сессии базы данных
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
async def root():
    return {"message": "Welcome to Random Coffee!"}

@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.post("/meetings/", response_model=schemas.Meeting)
def create_meeting(meeting: schemas.MeetingCreate, db: Session = Depends(get_db)):
    return crud.create_meeting(db=db, meeting=meeting)

# Эндпоинт для перенаправления пользователя на страницу аутентификации Google
@app.get("/auth/login")
def login():
    authorization_url = f"https://accounts.google.com/o/oauth2/auth?response_type=code&client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}&scope=openid%20email%20profile"
    return {"login_url": authorization_url}

# Эндпоинт для получения информации о текущем пользователе
@app.get("/users/me")
async def read_users_me(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid authentication credentials")
        # Здесь вы можете добавить дополнительную логику, например, получение данных пользователя из базы данных
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")
    return {"user_id": user_id}

# Эндпоинт для обработки обратного вызова с кодом авторизации
@app.get("/auth/callback")
def callback(code: str, db: Session = Depends(get_db)):
    token_url = "https://oauth2.googleapis.com/token"
    token_data = {
        "code": code,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "redirect_uri": REDIRECT_URI,
        "grant_type": "authorization_code",
    }
    token_response = requests.post(token_url, data=token_data)

    # Проверка на ошибки в запросе
    if token_response.status_code != 200:
        raise HTTPException(status_code=400, detail="Invalid token response")

    token_json = token_response.json()
    user_info_url = "https://www.googleapis.com/oauth2/v2/userinfo"
    user_info_response = requests.get(user_info_url, headers={"Authorization": f"Bearer {token_json['access_token']}"})

    if user_info_response.status_code != 200:
        raise HTTPException(status_code=400, detail="Invalid user info response")

    user_info = user_info_response.json()
    
    # Создание JWT токена для пользователя
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user_info["email"]}, expires_delta=access_token_expires
    )
    
    # Здесь вы можете сохранить информацию о пользователе в базу данных, если это необходимо
    
    return {"access_token": access_token, "token_type": "bearer"}
