import express from 'express'

const application = express()

application.get('/recipe', (request, response) => {
	response.send('Api anrop gick igenom')
})

application.get('/throw', (request, response) => {
	response.send(Math.random().toString())
})

application.listen(3001, () => {
	console.log('Server igång på på port ' + 3001)
})