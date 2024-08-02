**HTTP Response Status Codes**

Responses are grouped in five classes:

* Informational responses (100 – 199)

* Successful responses (200 – 299)

* Redirection messages (300 – 399)

* Client error responses (400 – 499)

* Server error responses (500 – 599)

**Informational Responses**

* 100(Continue) : the client should continue the request or ignore the response if the request is already finished.

* 101(Switching Protocols) : indicates the protocol the server is switching to.

**Successful Responses**

* 200(OK): The request succeeded. The result meaning of "success" depends on the HTTP method:
GET,POST,DELETE,PUT

* 201(Created): This is typically the response sent after POST requests, or some PUT requests.

* 202(Accepted): The request has been received,there is no way in HTTP to later send an asynchronous response indicating the outcome of the request.

**Client Error Respondes**

* 400(Bad Request): The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).

* 401(Unauthorized): That is, the client must authenticate itself to get the requested response.

* 402(Payment Required)

* 404(Not Found): The server cannot find the requested resource. In the browser, this means the URL is not recognized. 

* 408(Requested Timeout):This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. 

**Server Responses**

* 500(Internal Server Error): The server has encountered a situation it does not know how to handle.

* 502(Bad Gateway): This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

* 503(Service Unavailable): The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. 

* 504(Gateway Timeout): This error response is given when the server is acting as a gateway and cannot get a response in time.
