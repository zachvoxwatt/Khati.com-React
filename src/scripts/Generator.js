function createString(arr)
{
    let returnString = ''
    let randomIndex = null

    for (let i = 0; i < 360; i++)
    {
        randomIndex = Math.floor(Math.random() * arr.length)    
        returnString += arr[randomIndex]
    }
    return returnString
}

function copyToClipboard(givenData) { navigator.clipboard.writeText(givenData) }

export { createString, copyToClipboard }
