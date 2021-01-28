import React from 'react'
import {useEffect, useState} from 'react'

export const HomeView = () => {
    const [number, setNumber] = useState(0)

    /*useEffect(() => {
        alert("Home view first render")
        return (() => alert("Left HomeView"))
    }, [number])
    */

    return (
        <div>
           <h1>This is the HomeView</h1> 

        </div>
    )
}


/*<h1>{number}</h1>
            <button onClick = { () => setNumber(number + 1)}>Increment</button>
            */