chrome.runtime.onInstalled.addListener((reason) => {
    console.log(reason.reason)


    if (reason.reason === chrome.runtime.OnInstalledReason.UPDATE) {
        OpenMyweb();
    }
});

function OpenMyweb() {
    chrome.windows.create({
        url: 'http://localhost:8069'
    });
}
