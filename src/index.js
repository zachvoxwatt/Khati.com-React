import { createRoot } from 'react-dom/client'
import React from 'react';
import Title from './scripts/Title';
import DisplayBox from './scripts/DisplayBox'
import InputBox from './scripts/InputBox'
import Buttons from './scripts/Buttons'
import './css/index.css';

const emojisData = {
    defaultPreset: ['๐', 'โค', '๐ค', 'โฃ', '๐', '๐', '๐', '๐', '๐', '๐งก', 'โบ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅฐ', '๐', '๐', '๐', '๐', 'โค๏ธโ๐ฅ'],
    customPreset: [],
    currentState: ''
}

const rootcontainer = document.getElementById('root')
const root = createRoot(rootcontainer)

root.render(
    <React.StrictMode>
        <Title />
        <DisplayBox />
        <InputBox data={emojisData}/>
        <Buttons data={emojisData}/>
    </React.StrictMode>
)