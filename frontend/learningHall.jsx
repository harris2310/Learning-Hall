import React from 'react';
import ReactDOM from 'react-dom';
import {logIn , signOut , signUp} from "./util/session"
import App from './components/app';
import configureStore from './store/store';

    window.logIn = logIn
    // debugger;
    window.signUp = signUp

    window.signOut = signOut
document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore()
    
    window.store = store 
    debugger
    const root = document.getElementById("root")
    ReactDOM.render(<App  store={store}/>, root)
})
// ReactDOM.render(<App />, root)
