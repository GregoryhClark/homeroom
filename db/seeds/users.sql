CREATE TABLE users (
 user_id SERIAL PRIMARY KEY,
 username VARCHAR(50)  UNIQUE NOT NULL,
 password VARCHAR(80) NOT NULL,
 type VARCHAR(20) NOT NULL
)


INSERT INTO users (account_type, username, password, first_name, last_name, email, photo, phone_number)
values(3, 'stud', 'stud', 'Student_First', 'Student_Last', 'stud@stud.com', 'photo_string', 12345)

INSERT INTO users (account_type, username, password, first_name, last_name, email, photo, phone_number)
values(2, 'teach', 'teach', 'Teacher_First', 'Teacher_Last', 'teach@teach.com', 'photo_string', 12345)

INSERT INTO users (account_type, username, password, first_name, last_name, email, photo, phone_number)
values(4, 'par', 'par', 'Parent_First', 'Parent_Last', 'parent@parent.com', 'photo_string', 12345)
