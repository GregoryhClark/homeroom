
--create student_parent
create table student_parent(
relationship_id SERIAL PRIMARY KEY,
student_id INTEGER REFERENCES users(user_id),
parent_id INTEGER REFERENCES users(user_id)
)