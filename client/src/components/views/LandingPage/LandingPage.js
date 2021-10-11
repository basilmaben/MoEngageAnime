import React, { useEffect } from 'react'
import {API_URL} from '../../Config'
function LandingPage() {

    useEffect(() => {

        fetch(`${API_URL}`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
            
    }, [])

    return (
        <>
            <div className="app">
            </div>
        </>
    )
}

export default LandingPage
