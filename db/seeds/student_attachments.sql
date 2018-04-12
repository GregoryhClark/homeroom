--student_attachments
create table student_attachments(
attachement_id SERIAL PRIMARY KEY,
student_assignment_id INTEGER REFERENCES student_assignments(student_assignment_id),
name VARCHAR(50) NOT NULL,
url VARCHAR(500) NOT NULL,
upload_time DATE NOT NULL
)