--create students
create table students(
student_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id),

)