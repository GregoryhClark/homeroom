--assignment_templates
create table assignment_templates(
assignment_template_id SERIAL PRIMARY KEY,
author_id INTEGER REFERENCES users(user_id),
assignment_template_name VARCHAR(50) NOT NULL,
assignment_template_description VARCHAR(250) NOT NULL,
assignment_template_instructions VARCHAR(2500) NOT NULL,
assignment_template_topic VARCHAR(50) NOT NULL,
possible_points INTEGER NOT NULL,
assignment_template_date_created DATE NOT NULL,
assignment_template_last_updated DATE DEFAULT null
)


INSERT INTO assignment_templates (author_id, assignment_template_name, assignment_template_description, assignment_template_instructions, assignment_template_topic, possible_points, assignment_template_date_created, assignment_template_last_updated)

values (3, 'Oxford Comma', 'This is the description of the assignment...', 'Instructions for the assignment here...','Grammar', 100, '2018-04-11', '2018-04-11')
