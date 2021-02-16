import Axios from 'axios'

const URL = 'https://swapi.dev/api/'

const StarWarsApi = Axios.create ({
    baseURL: URL

})

export default StarWarsApi