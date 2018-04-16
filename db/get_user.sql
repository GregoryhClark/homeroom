SELECT
user_id,
username,
first_name,
last_name,
email,
photo,
phone_number,
account_type
FROM users
WHERE username = $1;