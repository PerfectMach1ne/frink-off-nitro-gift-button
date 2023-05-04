let xpaths = {
  'server_button': '//*[@id="app-mount"]/div[3]/div[1]/div[1]/div/div[2]/div/div/div/div/div[2]/div[2]/main/form/div/div/div/div[4]/button',
  'dm_button': '//*[@id="app-mount"]/div[3]/div[1]/div[1]/div/div[2]/div/div/div/div/div[2]/div[2]/main/form/div/div/div/div[4]/button'
};
// let serverButton = document.evaluate(xpaths.server_button, document.body, null, XPathResult.ANY_TYPE, null);
// serverButton.remove();

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

const interval = setInterval(function() {
  try {
    let serverButton = getElementByXpath(xpaths.server_button).textContent = "";
  } catch(err) {
    console.log(`server_button element currently not present.\nError message: ${err}`);
  }

  try {
    let DMButton = getElementByXpath(xpaths.dm_button).textContent = "";
  } catch(err) {
    console.log(`dm_button element currently not present.\nError message: ${err}`);
  }
  
}, 500);
