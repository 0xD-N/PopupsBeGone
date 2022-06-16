

let getTab = async function()
{
    let tabs = await chrome.tabs.query({active: true, currentWindow: true, highlighted: true}) //https://developer.chrome.com/docs/extensions/reference/tabs/#method-query
    
    return tabs[0]
    
}

chrome.tabs.onActivated.addListener(async function() //https://developer.chrome.com/docs/extensions/reference/tabs/#event-onActivated
{
    let currentTab = await getTab()

    //output is shown in normal console (foreground)
    chrome.scripting.executeScript({files: ["./inject.js"], target: {tabId: currentTab["id"]}}) //https://developer.chrome.com/docs/extensions/reference/scripting/#method-executeScript
     
})