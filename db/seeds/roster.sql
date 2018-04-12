--roster
create table roster(
roster_id SERIAL PRIMARY KEY,
class INTEGER REFERENCES classes(class_id),
student INTEGER REFERENCES users(user_id)
)


