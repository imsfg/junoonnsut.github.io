import React from 'react'

export function main() {
    return (
        <div>
            Hello World!
        </div>
    );
}

// this is a functional component in react, this function returns jsx. React render engine processes this request and creates html to 
// to mount in dom

// Why we need react? React is a component based approach to design UIs, using js. This helps us to create single page applcations commonly
// said as SPAs. this means all the loading time taken at the start to load the js is the only 'loading' u will see in a React applications usually
// The user experience is very smooth.

// ex: 
// lets say we have a todo element in a todo list

// <div>
//    <h1>Hello World</h1>
//    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, quo.</p>
//    <img src="#" alt="a random image">
// </div>

// and we have like 1000 todos 
// suppose we need to change the image in each todo. It will be a real pain to change it in 1000 of those

// instead we can make a function in react which take some inputs and render this todo element for us

export function Todo({name, description, imageURL}) { // {name, description, imageURL} => parameters of the function

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={imageURL} alt="a random image" />
        </div>
    );

}


// npx create-react-app <project name> 
// npm create vite@latest