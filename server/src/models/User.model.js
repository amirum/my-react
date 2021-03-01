import mongoose from 'mongoose'
const { Schema, model } = mongoose

const UserSchema = Schema({
	username: {
		type: String,
		unique: true,
		allowNull: false,
		required: true,
	},
	age: {
		type: Number,
		min: [18, 'You need to be 18 or above'],
		max: [90, 'Sorry'],
		required: false,
	},
	password: {
		type: String,
		required: true
	},
}, { timestamps: true } )

const UserModel = model('user', UserSchema)
export default UserModel