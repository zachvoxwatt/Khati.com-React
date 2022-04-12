import React, {useState} from "react"
import '../css/buttons.css'
import generateSound from '../resources/audio/generate.mp3'
import clipboardSound from '../resources/audio/copy.mp3'

const timeoutArray = [null, null]

const Buttons = function ()
{
    const inigen = 'Generate Emojis'
    const postgen = "Don't like it? Have another pile!"
    const iniclip = 'Jam it to Clipboard'
    const postclip = 'Copied to Clipboard!'

    const [generateButtonState, setGButtonState] = useState(inigen)
    const [clipboardButtonState, setCBoardButtonState] = useState(iniclip)
    
    function generateEmojis()
    {
        setGButtonState(postgen)

        clearInterval(timeoutArray[0])
        timeoutArray[0] = setInterval(function () { setGButtonState(inigen) }, 3000)
        playSound(generateSound)
    }

    function giveClipboardData()
    {
        
        setCBoardButtonState(postclip)

        clearInterval(timeoutArray[1])
        timeoutArray[1] = setInterval(() => { setCBoardButtonState(iniclip) }, 3000)
        playSound(clipboardSound)
    }

    function playSound(file)
    {
        let audio = new Audio(file)
        audio.volume = 0.02
        audio.play()
    }

    return(
        <div className='buttons-box'>
            <button id='generateButton' onClick={() => generateEmojis()}>{generateButtonState}</button>
            <button id='clipboardButton' onClick={() => giveClipboardData()}>{clipboardButtonState}</button>
        </div>
    )
}

export default Buttons