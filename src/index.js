// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import Badges from "./pages/Badges"

const page=<Badges
    first_name="Adrian"
    last_name="González"
    job="Designer"
    twitter="adrigondo"
    gravatar="https://secure.gravatar.com/avatar/74b143021b70bb936f4edbc9e11ecb1b"
/>
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(page, container);
