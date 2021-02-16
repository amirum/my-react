import Axios from 'axios'
import React from 'react'

const getDataFromStarWarsApi = () => {
    Axios.get('https://swapi.dev/api/people/1')
        .then(response => console.log(response))
        .catch(error => console.log(error)) // fångar upp error
}

export const ShopView = () => {
    return (
        <div>
            <h1>This is a Shop view</h1>
            <button onClick={() => getDataFromStarWarsApi()}>Test API call</button>
        </div>
    )
}
