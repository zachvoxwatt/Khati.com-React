import React, {Component} from "react"
import '../css/box.css'

class InputBox extends React.Component
{
    constructor(props)
    {
        super(props)
        this.inistate = {value : 'Put some emojis here to customize the output. If no value presents, default preset is used. (Max value: 40)'}
    }

    checkInput(event)
    {
    }

    render()
    {
        return(
            <div id='inputbox-box'>
                <textarea onChange={(event) => this.checkInput(event)} id='inputbox' rows={1} cols={16} placeholder={this.inistate.value}></textarea>
                
                <h6 id='status'>hello</h6>
            </div>
        )
    }
}

export default InputBox