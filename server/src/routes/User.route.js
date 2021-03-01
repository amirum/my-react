import UserController from '../controllers/User.controller.js'

const routes = (application) => { // use express to post
	application.post('/user', UserController.createUser)
	application.get('/user', UserController.getAllUsers)
}

export default {
	routes
}