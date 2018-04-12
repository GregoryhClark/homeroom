--student_assignments
create table student_assignments(
student_assignment_id SERIAL PRIMARY KEY,
student_id INTEGER REFERENCES users(user_id),
class_id INTEGER REFERENCES classes(class_id),
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
class_id,
name,
description,
instructions,
topic,
points_earned,
possible_points,
submitted,
completed,
due_date,
subject
)

values(1, 3, 'Math Test 3', 'This is the description of the assignment...', 'Instructions for the assignment here...', 'Algebra 1', 96, 100, '2018-04-09', '2018-04-09', '2018-04-09', 'Math')