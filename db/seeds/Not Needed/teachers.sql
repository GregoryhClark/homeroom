
--create teachers
CREATE TABLE teachers(
teacher_id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(user_id),
subjects TEXT[]

)