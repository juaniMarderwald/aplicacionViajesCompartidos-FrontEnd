import React from 'react'
import ReactDOM  from 'react-dom'
import { createRoot } from 'react-dom/client';
import App from './App';
import 'normalize.css';



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);