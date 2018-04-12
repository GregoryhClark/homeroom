--classes
create table classes(
class_id SERIAL PRIMARY KEY,
teacher INTEGER REFERENCES users(user_id),
subject VARCHAR(50) NOT NULL,
topic VARCHAR(50) NOT NULL,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
description VARCHAR(500) NOT NULL,
photo VARCHAR(500) DEFAULT null
)

INSERT INTO classes(teacher, subject, topic, start_date, end_date, description, photo)
values(
3,'English', 'English 1', '2017-08-05', '2018-5-13', 'Learn how to write well.', 'photoURL_here'
)