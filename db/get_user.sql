SELECT 
user_id,
username,
type
FROM users
WHERE username = $1;