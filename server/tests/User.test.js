import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test} from 'mocha'
import application from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)

const testingNonExistingRoute = () => {
	describe('testing non existing route', () => {
		test('should test HTTP call against a route that does not exist in this API', done => {
			Chai.request(application)
				.get('/$(randomString)')
				.end((request, response) => {
					response.should.have.a.status(404)
					done() 
				})
		})
	})
}

const getAllUsers = () => {
	describe('testing non existing route', () => {
		test('should return all users in database', done => {
			Chai.request(application)
				.get('/user')
				.end((request, response) => {
					response.should.have.a.status(200)
					response.body.should.be.a('array')
					response.body.length.should.be.eql(response.body.length)
					response.body.length.should.be.eq(5)
					done()
				})
		})
	})
}


const updateUser = () => {
	const userID = '604552d02c38600f44c9387e'

	describe('...', () => {
		test('should manipulate data of current object', done => {
			Chai.request(application)
				.put(`/user/${userID}`)
				.send({ username: 'amir79', password: 'amir79' })
				.end((request, response) => {
					response.should.have.a.status(200)
					response.body.should.be.a('object')
					response.body.should.have.property('_id').eq(userID)
					//response.body.should.have.property('username').eq('amir79')

					done()
				})
		})
	})
}



describe('TESTING THE USER API ENTITY', () => {
	testingNonExistingRoute(),
	getAllUsers(),
	updateUser()
})

