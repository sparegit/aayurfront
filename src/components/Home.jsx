import React from 'react'

const Name ='Name here'
function Home() {
    return (
        <div>
            <Person/>
            <Message/>
            <h2>{Name}</h2>
            <h1>Hello</h1>
            <p>This is my first component </p>
        </div>
    )
}
const Person= ()=><h2>This is Person</h2>
const Message=()=>{
    return <p>This is const Message</p>
    
};

export default Home
