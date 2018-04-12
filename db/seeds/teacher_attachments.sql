--teacher_attachments
create table teacher_attachments(
attachement_id SERIAL PRIMARY KEY,
assignment_template_id INTEGER REFERENCES assignment_templates(assignment_template_id),
name VARCHAR(50) NOT NULL,
url VARCHAR(500) NOT NULL,
upload_time DATE NOT NULL
)