import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import Middlewares from './src/middlewares/Middlewares.js'
import Configuration from './configurations/Configurations.js'
import UserRoutes from './src/routes/User.route.js'

const application = express()
//application.use(express.json())
application.use(bodyParser.urlencoded({ extended: true }))
application.use(bodyParser.json())
application.use(helmet())
application.use(morgan('common'))

/*const checkIfAdmin = (request, response, next) => {
	console.log(request.query)	// eller console.log(request.query.username)
	next() // hoppa ut om du når hit
}*/

//application.use(checkIfAdmin) // middleware functions, ska exekveras vaje gång en anrop görs

application.get('/recipe', (request, response) => {
	response.send('Api anrop gick igenom')
})

/*application.get('/throwdice', checkIfAdmin, (request, response) => {
	response.send(Math.random().toString())
})*/

UserRoutes.routes(application) // 
application.use(Middlewares.notFound) // vi anropar notFound om adressen inte är korrekt

application.use(Middlewares.errorHandler) // anrop som kommer fram till serevern men misslyckas när den ska hanteras. 

Configuration.connectToDatabase()
Configuration.connectToPort(application)