from sqlalchemy.orm import Session
from models import User
import schemas
from models import Meeting

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    db_user = User(username=user.username, email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def create_meeting(db: Session, meeting: schemas.MeetingCreate):
    db_meeting = Meeting(user1_id=meeting.user1_id, user2_id=meeting.user2_id, duration=meeting.duration)
    db.add(db_meeting)
    db.commit()
    db.refresh(db_meeting)
    return db_meeting