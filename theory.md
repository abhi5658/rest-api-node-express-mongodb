# How to Build a RESTful API using Node, Express, and Mongo

Tutorial video : https://www.youtube.com/watch?v=o3ka5fYysBM

- https://github.com/theoutlander/rest-api-workshop

## What is HTTP
- Application Layer Protocol
- Built on top of TCP/IP Protocol
- Rules for transferring resources
- Every HTTP Request is executed independently without the knowledge of requests that came before it
- HTTP is stateless
- TCP/IP is not stateless
- Payload (body/data) can be anything as long as it is defined in header

## What is REST (Representational State Transfer)
- Architectural Pattern with design guidelines
- HTTP is usually the underlying protocol
- Use HTTP methods explicitly
- Every RESTful resource has a unique ID
- Client state is not persisted between requests
- Caching Policy for responses 
- Separation of concerns between clients and servers
- Layered system
- No standard way of writing APIs
- REST provides guidelines
- CRUD Operations 
- Create | Read | Update | Delete

## REST Client : API Client
- Insomnia
- Postman

## Express : Web Server
- Install Dependency
- Reference the express library
- Create express application instance

## Serve Static Content : HTML | JS | CSS | Images
- Create a public folder under root
- Create an HTML file
- Configure express to serve static content

## Route : Mount to Express
- GET Request
- Request Parameters
- Query Parameters

## Middleware : Functions that execute serially
- Access to request/response objects and the next middleware function in the pipeline
- Execute any code
- Make changes to the request and the response objects
- End the request-response cycle
- Call the next middleware function in the stack

## Error Pages : Custom Handlers
- 404 Not Found Handler
- 500 Internal Server Error

## Mongoose : For MongoDB
- Install dependency
- Reference Mongoose
- CRUD API

