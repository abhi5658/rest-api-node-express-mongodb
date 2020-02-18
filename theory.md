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

## What is REST (Representational State Transfer
)
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
