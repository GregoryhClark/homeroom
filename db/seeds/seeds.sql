CREATE TABLE account_types(
    account_type_id SERIAL PRIMARY KEY,
    account_type_name VARCHAR(20) NOT NULL
)

INSERT INTO account_types (account_type_name)
VALUES
('Parent')

--1 Admin 
--2 Teacher 
--3 Student
--4 Parent



--assignment_templates
create table assignment_templates(
assignment_template_id SERIAL PRIMARY KEY,
author_id INTEGER REFERENCES users(user_id),
name VARCHAR(50) NOT NULL,
description VARCHAR(250) NOT NULL,
instructions VARCHAR(2500) NOT NULL,
topic VARCHAR(50) NOT NULL,
possible_points INTEGER NOT NULL,
Date_created DATE NOT NULL,
last_updated DATE DEFAULT null
)


INSERT INTO assignment_templates (author_id, assignment_template_name, assignment_template_description, assignment_template_instructions, assignment_template_topic, possible_points, assignment_template_date_created, assignment_template_last_updated)

values (3, 'Oxford Comma', 'This is the description of the assignment...', 'Instructions for the assignment here...','Grammar', 100, '2018-04-11', '2018-04-11')


--courses
create table courses(
course_id SERIAL PRIMARY KEY,
teacher INTEGER REFERENCES users(user_id),
subject VARCHAR(50) NOT NULL,
topic VARCHAR(50) NOT NULL,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
description VARCHAR(500) NOT NULL,
photo VARCHAR(500) DEFAULT null
)

INSERT INTO courses(teacher, subject, topic, start_date, end_date, description, photo)
values(
3,'English', 'English 1', '2017-08-05', '2018-5-13', 'Learn how to write well.', 'photoURL_here'
)


--roster
create table roster(
roster_id SERIAL PRIMARY KEY,
course INTEGER REFERENCES courses(course_id),
student INTEGER REFERENCES users(user_id)
)


--schools
create table schools(
school_id SERIAL PRIMARY KEY,
name VARCHAR(250) NOT NULL,
district VARCHAR(250) NOT NULL,
street_address VARCHAR(200) NOT NULL,
city VARCHAR(75) NOT NULL,
state VARCHAR(25) NOT NULL,
zip INTEGER NOT NULL,
phone INTEGER NOT NULL,
grades VARCHAR(25) NOT NULL
)


--student_assignments
create table student_assignments(
student_assignment_id SERIAL PRIMARY KEY,
student_id INTEGER REFERENCES users(user_id),
course_id INTEGER REFERENCES courses(course_id),
name VARCHAR(50) NOT NULL,
description VARCHAR(250) NOT NULL,
instructions VARCHAR(2500) NOT NULL,
topic VARCHAR(50) NOT NULL,
points_earned INTEGER DEFAULT null,
possible_points INTEGER NOT NULL,
submitted DATE DEFAULT null,
completed DATE DEFAULT null,
comments VARCHAR(500) DEFAULT null,
feedback VARCHAR(500) DEFAULT null,
subject VARCHAR(64), 
due_date date
)

insert into student_assignments (
student_id,
student_assignments_course_id,
assignment_name,
student_assignment_description,
student_assignment_instructions,
student_assignment_topic,
possible_points,
due_date,
subject
)

values(2, 3, 'Math Test 4', 'This is the description.', 'Instructions for assignment.', 'Algebra 1', 100, '2018-04-25', 'Math')

--student_attachments
create table student_attachments(
attachement_id SERIAL PRIMARY KEY,
student_assignment_id INTEGER REFERENCES student_assignments(student_assignment_id),
name VARCHAR(50) NOT NULL,
url VARCHAR(500) NOT NULL,
upload_time DATE NOT NULL
)


--create student_parent
create table student_parent(
relationship_id SERIAL PRIMARY KEY,
student_id INTEGER REFERENCES users(user_id),
parent_id INTEGER REFERENCES users(user_id)
)

--teacher_attachments
create table teacher_attachments(
attachement_id SERIAL PRIMARY KEY,
assignment_template_id INTEGER REFERENCES assignment_templates(assignment_template_id),
name VARCHAR(50) NOT NULL,
url VARCHAR(500) NOT NULL,
upload_time DATE NOT NULL
)

CREATE TABLE users (
 user_id SERIAL PRIMARY KEY,
 username VARCHAR(50)  UNIQUE NOT NULL,
 password VARCHAR(80) NOT NULL,
 type VARCHAR(20) NOT NULL,
 --first_name
 --last_name
)


INSERT INTO users (account_type, username, password, first_name, last_name, email, photo, phone_number)
values('Student', 'stud', 'stud', 'Student_First', 'Student_Last', 'stud@stud.com', 'photo_string', 12345)

INSERT INTO users (account_type, username, password, first_name, last_name, email, photo, phone_number)
values('Teacher', 'teach', 'teach', 'Teacher_First', 'Teacher_Last', 'teach@teach.com', 'photo_string', 12345)

INSERT INTO users (account_type, username, password, first_name, last_name, email, photo, phone_number)
values('Parent', 'par', 'par', 'Parent_First', 'Parent_Last', 'parent@parent.com', 'photo_string', 12345)




--assignment_topics
CREATE TABLE assignment_topics (
assignment_topic_id SERIAL PRIMARY KEY,
assignment_name varchar(100)
)

INSERT INTO assignment_topics (topic_name)
values
('')


--student parent
insert into student_parent (student_id, parent_id)
values(12,20 )

--calendar events
CREATE TABLE calendar_events (
calendar_event_id SERIAL PRIMARY KEY,
calendar_event_assignment_id INTEGER,
calendar_event_created_by_id INTEGER,
calendar_event_course_id INTEGER,
calendar_event_title varchar(100),
calendar_event_start_date DATE,
calendar_event_start_time TIME,
calendar_event_end_date DATE,
calendar_event_end_time TIME,
calendar_event_all_day boolean,
calendar_event_visible boolean DEFAULT true,
calendar_event_id_deleted boolean DEFAULT false
)

insert into calendar_events (
    calendar_event_assignment_id,
calendar_event_created_by_id ,
calendar_event_course_id ,
calendar_event_title ,
calendar_event_start_date ,
calendar_event_start_time ,
calendar_event_end_date ,
calendar_event_end_time ,
calendar_event_all_day 
)
values(5,9,3,'Test Event', '04/05/2018','06:00:00', '04/05/2018','08:30:00', false)

insert into assignment_templates
(author_id, assignment_template_name, assignment_template_description, assignment_template_instructions, assignment_template_topic, possible_points, assignment_template_date_created, assignment_template_last_updated)
values
(9, 'Math Test 3', 'description here for the template description','instructions go here okay', 'Algebra 1', 100, '2018-04-11', '2018-04-11');
