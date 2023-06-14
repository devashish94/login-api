# login-api
This is a basic login-api with MySQL as the database.

Create a .env file in the root directory with the appropriate contents in the following format:
```
HOST=
PORT=
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE= 
```

## If running mysql through docker 
Use the following command, fill your own password 
sudo docker run --name=<any-name> -e MYSQL_ROOT_PASSWORD=<your-password> -p 3306:3306 -d mysql

