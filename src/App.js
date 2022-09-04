import React from "react";

const Log = () => {
    console.log('sah')
}

const App = () =>{
    Log()
    return (
        <h1>
            Welcome to React App thats build using Webpack and Babel separately
        </h1>
    )
}

export default App