// 1xx informational response - the request was recieved, continuing process

//2xx successfull - the request is sucessfully recieved, understood ans accepted. 
const OK = 200
const CREATED = 201

//3xx error - further action needs to be taken in order to complete the request.

// 4xx errror - client error, request contains bad syntax and can not be fulfilled
const BAD_REQUEST = 400
const UNAUTHORIZED = 401
const FORBIDDEN = 403
const NOT_FOUND = 404
const METHOD_NOT_ALLOWED = 405
const DUBLICATE_RESOURCE = 409


// 5xx server error - the server failed to fulfill an apperantly valid request.
const INTERNAL_SERVER_ERROR = 500

export default {
	OK,
	CREATED,
	BAD_REQUEST,
	UNAUTHORIZED,
	FORBIDDEN,
	NOT_FOUND,
	METHOD_NOT_ALLOWED,
	DUBLICATE_RESOURCE,
	INTERNAL_SERVER_ERROR

}

