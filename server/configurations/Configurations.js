import mongoose from 'mongoose' 
import dotenv from 'dotenv'

dotenv.config()
const { DATABASE_URL, PORT } = process.env

const connectToDatabase = async () => {
	try {
		await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
		console.log('SUCCESFULLY CONECTED TO THE DATABASE')
	} catch (error) {
		console.log('ERROR OCCURED WHILE TRYING TO CONNECT TO THE DATABASE...')
		process.exit()
	}
}

const connectToPort = (application) => {
	application.listen(PORT, () => {
		console.log('SERVER IS RUNNING ON PORT' + PORT)
	})
}

export default {
	connectToDatabase,
	connectToPort
}

/*mongoose.connect('mongodb://localhost/namndb', { useNewUrlParser: true, useUnifiedTopology: true})
	.then (() => console.log('SUCCESFULLY CONNECTED TO THE DATABASE'))
	.catch ((error) => {console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ' + error)
		process.exit()
    })*/
    
/*mongoose.connect('mongodb://localhost/namndb', { useNewUrlParser: true, useUnifiedTopology: true})
	.then (() => console.log('SUCCESFULLY CONNECTED TO THE DATABASE'))
	.catch ((error) => {console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ' + error)
		process.exit()
	})
	

application.listen(3001, () => {
	console.log('Server igång på på port ' + 3001)
})*/