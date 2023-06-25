# login-api
This is a basic login-api with MySQL as the database.

### Starting the Server
If you want to test the server on your local machine, then just provide the Database Password as the other values have default values. The below are the default values:
| Variable | Default Values     | Description                |
| :-------- | :------- | :------------------------- |
| `HOST` | `localhost` | Hostname of the server |
| `PORT` | `9000` | Port of the server |
| `DB_HOST` | `localhost` | Hostname of the MySQL database server |
| `DB_USER` | `root` | Username of the MySQL database server |
| `DB_PASSWORD` | `NONE` | **No Default Value** Password of the MySQL |

If you haven't set any HOST or PORT in the above command then use the default values provided in the above table for any further requests to the server, as shown in the below examples. 

Be sure to start the database server before attempting to run the below command.
Replace password with the MySQL database server password in quotes. 

To start the server move to any directory in or after the root directory run the below command: 
```
DB_PASSWORD=password npm start
```
Feel free to create a .env file in the root directory with all the variables and their respective values.  

### Sending a basic Request to the Server
Sending a basic GET Request to the server for getting the status of the server.
```
curl --request GET http://localhost:9000/server-status
```
You should get back a response in the form of JSON, which should have a status, statusCode and a simple message if the sever is running. 

### Checking all the available URIs supported by the server
Send a GET request with the URI '/available'. It will give back all the supported endpoints with their request method with a basic description. The command is as follow:
```
curl --request GET http://localhost:9000/available
``` 

### If running MySQL using Docker
Use the following command to spawn a new MySQL Database container. Replace the password with the above DB_PASSWORD.
```
sudo docker run --name=<any-name> -e MYSQL_ROOT_PASSWORD=<password> -p 3306:3306 -d mysql
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
