import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './routes/App'
import './global.scss';

const root = createRoot(document.getElementById('root'))
root.render( <App /> );
