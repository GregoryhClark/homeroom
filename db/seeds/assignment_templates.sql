
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


INSERT INTO assignment_templates (author_id, name, description, instructions, topic, possible_points, date_created, last_updated)

values (3, 'Assignment 1 test', 'This is the description of the assignment...', 'Instructions for the assignment here...','algebra 2', 100, '2018-04-11', '2018-04-11')
