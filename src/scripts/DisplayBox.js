import React from "react"
import '../css/box.css'

class EmoBox extends React.Component
{
    constructor(props)
    {
        super(props)
        this.placeholderText = {value : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus magna fringilla urna porttitor. Duis at consectetur lorem donec. Feugiat nisl pretium fusce id velit ut tortor pretium. Ut venenatis tellus in metus vulputate. Eget est lorem ipsum dolor sit amet. Sit amet consectetur adipiscing elit pellentesque. Vel pharetra vel turpis nunc eget lorem dolor. Consequat mauris nunc congue nisi vitae suscipit tllus mauris a. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Vivamus arcu felis bibendum ut tristique et egestas quis. In hac habitasse platea dictumst. Enim blandit volutpat maecenas volutpat. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Mauris commodo quis imperdiet massa tincidunt nunc. Dui id ornare arcu odio ut sem. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Commodo sed egestas egestas fringilla. Elementum integer enim neque volutpat ac.'}

        this.currentState = {value: ''}
    }

    render()
    {
        return(
            <textarea readOnly id='displaybox' rows={16} cols={50} placeholder={this.placeholderText.value}></textarea>
        )
    }
}

export default EmoBox