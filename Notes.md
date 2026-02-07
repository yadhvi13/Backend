```
1.) npm init -y => nodejs application initaite
2.) npm i express => install express package
3.) created server.js file 
4.) require express and create instance of express in app.
5.) listening and starting server on PORT 3000 using app.listen(); 
6.) to access data coming from frontend - use req method
7.) and to access data from server to frontend - use res method
```

```
# WHAT IS API?? AND WHAT IS REST API'S??
-application programming interface , to communicate two different applications we use some set of rules and protocols called API
example- Backend server and frontend.

# TYPES OF APIS
- REST (representaional state transfer) API's
- WebSocket API's
etc....

# REST API'S
- these are stateless communication.
- if you want to communicate between server and browser, you will use HTTP protocols and use methods like (GET,POST,PUT,DELETE,PATCH).

```

```
## REST API'S METHODS
1.) GET -> when we want data from server
2.) POST -> when we want to send data to server
3.) PATCH -> when data is already present on server and need to update that data on server
4.) DELETE -> to delete already present data on from server.

```

```
## CREATING TODO 
// ARRAY OF NOTES--------
const notes = [{
    title: "my first note",
    description: "this is my first note",
},
{
    title: "my second note",
    description: "this is my second note",
}
    ]

### using POSTMAN for devloping the API, as it work as frontend and see if the data is fetching on browser or not  

### we will also create MIDDLEWARE , as jo bhi data postman se body ke andar RAW format me , use READABLE format me bna dega, isliye us data ko middleware ke through pdh jayega.

```