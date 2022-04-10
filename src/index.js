import { createRoot } from 'react-dom/client'
import React from 'react';
import Title from './scripts/Title';
import DisplayBox from './scripts/DisplayBox'
import InputBox from './scripts/InputBox'
import Buttons from './scripts/Buttons'
import './css/index.css';

const rootcontainer = document.getElementById('root')
const root = createRoot(rootcontainer)

root.render(<React.StrictMode><Title /><DisplayBox /><InputBox /><Buttons /></React.StrictMode>)