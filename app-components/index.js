import React from "react"
import ReactDOM from "react-dom"
import Main from "./Main"
import NavBar from "./Navbar"

function App() { 
    return (
        <div> 
            <NavBar />
            <Main />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))