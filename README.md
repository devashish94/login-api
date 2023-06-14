# login-api
This is a basic login-api with MySQL as the database.

Create a .env file in the root directory with the appropriate contents in the following format:
```
HOST=
PORT=
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
```

### If running MySQL using Docker
Use the following command to spawn a new MySQL Database container 
```
sudo docker run --name=<any-name> -e MYSQL_ROOT_PASSWORD=<your-password> -p 3306:3306 -d mysql
```
If you wish to restart the old instance of the database (because it had the data)
then find the CONTAINER ID of the last instance of the database using
```
sudo docker ps -a
```
Now run the following command to resume the database from that state 
```
sudo docker start <container id>
```
