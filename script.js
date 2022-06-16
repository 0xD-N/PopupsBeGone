

let getTab = async function()
{
    let tabs = await chrome.tabs.query({active: true, currentWindow: true, highlighted: true})
    
    return tabs[0]
    
}

chrome.tabs.onActivated.addListener(async function()
{
    let currentTab = await getTab()
    console.log("here")
    chrome.scripting.executeScript({files: ["./inject.js"], target: {tabId: currentTab["id"]}})
    
})