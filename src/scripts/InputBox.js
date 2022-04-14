import React from "react"
import '../css/box.css'

class InputBox extends React.Component
{
    constructor(props)
    {
        super(props)
        this.inistate = 
        {
            normalnote : 'Put some emojis here to customize the output. If no value presents, default preset is used.', 
            warningnote: "Note: Only emojis are allowed. Alphabetical letters, numeric digits or special characters are not supported."
        }
    }

    displayNotice(event, boolean)
    {
        
        if (boolean) event.target.placeholder = this.inistate.warningnote
        else event.target.placeholder = this.inistate.normalnote
    }

    checkInput(event)
    {
        let customInputs = event.target.value
        let splittedInput = customInputs.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)
        let outputArray = []

        for (let i = 0; i < splittedInput.length; i++)
        {
            let indexChar = splittedInput[i]
            if (indexChar !== "") outputArray.push(indexChar)
        }

        this.props.data.customPreset = outputArray
    }

    render()
    {
        return(
            <div id='inputbox-box'>
                <textarea onChange={(event) => this.checkInput(event)} onMouseOver={(event) => this.displayNotice(event, true)} onMouseLeave={(event) => this.displayNotice(event, false)} id='inputbox' rows={3} cols={16} placeholder={this.inistate.normalnote}></textarea>
            </div>
        )
    }
}

export default InputBox