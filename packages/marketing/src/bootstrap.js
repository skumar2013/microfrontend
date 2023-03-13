/*
    Mount function to start the app
    
    If development or in isolation, call mount immediately.
    
   If running through container, export mount function.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const mount = (el) => {
    ReactDOM.render(
        <App />, 
        el
    )
}

//Development
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot) {
        mount(devRoot);
    }
}

//For production
export { mount };