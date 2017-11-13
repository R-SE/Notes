RESTful API
===
REST - Representational State Transfer, an architectural style and the most popular type of web API

API - application programming interface; a software layer built by companies for internal use or offered to the public. Main functions include allowing pieces of software to communicate and work with each other, or for making an API request to access a set of data outlined by endpoints. The API **specification** is a set of documentation that serves as an instruction manual.

Using a web API is usually as simple as:
1) Check if a web service offers an APIs
2) Read the documentation
3) Sign up for API key
4) Make API request using URL & parameters (or use a HTTP client)
5) Unpack data

### Resource-based
- Use of things/objects over actions/methods
- Resources are identified by URIs
- Resources are manipulated via representations (JSON)
  - Resource: person (Rose),
    Service: contact info (GET),
    Representation: contactinfo.JSON

### The six constraints:
1. Uniform Interface
  - defines interface between client and server
    - HTTP verbs (GET, PUT, POST, DELETE)
    - URIs (resource names)
    - HTTP response (status, body)
2. Stateless
  - server contains no client state (doesn't hold data from previous requests)
  - self-descriptive messages in requests
  - session states are held client-side
3. Cacheable
  - server responses are cacheable
4. Client-Server
  - separation of concerns in a disconnected system linked via uniform interface
5. Layered System
  - multiple layers of software between client and server, hence not always direct connection to server
  - more scaleable
6. Code on Demand (optional)
  - server can temporarily extend client, transferring logic to client, who then executes it
    - eg JavaScript & Java applets

### XHR (XML HTTP Request)
- consists of **request line** that specifies type of request and what resource, **header** that sends additional info like client name, and optional **body** for data/content in POST/PUT requests.
```
var xhr = new XMLHttpRequest();
xhr.open("GET/PUT/DELETE/POST", URI);
xhr.send();
console.log(xhr.status + xhr.statusText);
```
#### HTTP verbs
- POST: create new resource, or everything else (like sensitive info)
- GET: read a resource; can be modified by GET parameters
- PUT: update a resource or create a specific resource given a URI
- DELETE: delete resource

*CRUD functionality is core to any persistent storage*
#### HTTP Status Codes
- Server responses contain a three-digit status code:
  - 1xx : Currently working on request
  - 2xx : Successfully returned
  - 3xx : Rerouting request or performing other action first
  - 4xx : Usually user error that bars access
  - 5xx : Server cannot respond to request
##### Top Status Codes from RESTAPITutorial
- **200 OK** General success status code
- **201 CREATED** Successful creation occurred (via POST or PUT). Set the Location header to contain a link to the newly-created resource (on POST). Response body content may or may not be present.
- **204 NO CONTENT** Indicates success but nothing is in the response body, often used for DELETE and PUT operations.
- **400 BAD REQUEST** General error for when fulfilling the request would cause an invalid state. Domain validation errors, missing data, etc. are some examples.
- **401 UNAUTHORIZED** Error code response for missing or invalid authentication token.
- **403 FORBIDDEN** Error code for when the user is not authorized to perform the operation or the resource is unavailable for some reason (e.g. time constraints, etc.).
- **404 NOT FOUND** Used when the requested resource is not found, whether it doesn't exist or if there was a 401 or 403 that, for security reasons, the service wants to mask.
- **405 METHOD NOT ALLOWED** Used to indicate that the requested URL exists, but the requested HTTP method is not applicable. For example, POST /users/12345 where the API doesn't support creation of resources this way (with a provided ID). The Allow HTTP header must be set when returning a 405 to indicate the HTTP methods that are supported. In the previous case, the header would look like "Allow: GET, PUT, DELETE"
- **409 CONFLICT** Whenever a resource conflict would be caused by fulfilling the request. Duplicate entries, such as trying to create two customers with the same information, and deleting root objects when cascade-delete is not supported are a couple of examples.
- **500 INTERNAL SERVER ERROR** Never return this intentionally. The general catch-all error when the server-side throws an exception. Use this only for errors that the consumer cannot address from their end.

### Authentication
- APIs may require an API key that identifies the client to the API provider. A popular protocol is **OAuth**, where you get credentials to trade for an access token

### Sources:
https://zapier.com/learn/apis/
