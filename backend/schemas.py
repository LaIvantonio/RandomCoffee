from pydantic import BaseModel

class UserBase(BaseModel):
    username: str
    email: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int

    class Config:
        orm_mode = True

class MeetingBase(BaseModel):
    user1_id: int
    user2_id: int
    duration: int

class MeetingCreate(MeetingBase):
    pass

class Meeting(MeetingBase):
    id: int

    class Config:
        orm_mode = True
