import dotenv from 'dotenv'
import StatusCode from '../../configurations/StatusCode.js'

dotenv.config()
const { ENVIRONMENT } = process.env

const notFound = (request, response, next) => {
	const error = new Error('Invalid URL - NOT FOUND' + request.originalUrl)
	response.status(StatusCode.NOT_FOUND) // servern svarar med 404 om adressen inte finns
	next(error)
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, request, response, next) => {
	const statusCode = (response.statusCode === StatusCode.OK)
		? 500 
		: response.statusCode

	response.status(statusCode)
	response.json ({
		statusCode: statusCode,
		message: error.message,
		stackTrace: ENVIRONMENT === 'PRODUCTION' ? null : error.stack
	})
}

export default {
	notFound,
	errorHandler
}