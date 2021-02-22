import http from '../StarwarsAPI'

const getDataAboutLukeSkywalker = () => {
    return http.get('/people/1')
}

const getStarWarsCharacter = (characterNumber: number) => {
    return http.get(`/people/${characterNumber}`)
}

export default{
    getDataAboutLukeSkywalker,
    getStarWarsCharacter
}