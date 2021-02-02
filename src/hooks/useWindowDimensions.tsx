import {useState, useEffect} from 'react'

const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window
    return {width, height}
}

export const useWindowDimensions = () => { 
    const [windowDomensions, setWindowDimensions] = useState(getWindowDimensions())
    const handleResize = () => { setWindowDimensions(getWindowDimensions())}

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.addEventListener('resize', handleResize)
    },[])
    return windowDomensions
}