import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Middlewares from './src/middlewares/Middlewares.js'
import Configuration from './configurations/Configurations.js'


const application = express()
application.use(helmet())
application.use(morgan('common'))

/*const checkIfAdmin = (request, response, next) => {
	console.log(request.query)	// eller console.log(request.query.username)
	next() // hoppa ut om du når hit
}*/

//application.use(checkIfAdmin) // middleware functions, ska exekveras vaje gång en anrop görs

/*application.get('/recipe', (request, response) => {
	response.send('Api anrop gick igenom')
})

application.get('/throwdice', checkIfAdmin, (request, response) => {
	response.send(Math.random().toString())
})*/


application.use(Middlewares.notFound) // vi anropar notFound om adressen inte är korrekt

application.use(Middlewares.errorHandler) // anrop som kommer fram till serevern men misslyckas när den ska hanteras. 

Configuration.connectToDatabase()
Configuration.connectToPort(application)