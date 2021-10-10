chrome.runtime.onInstalled.addListener((reason) => {
    // navigator.clipboard.readText().then(
    //     clipText => console.log(clipText));
    // console.log(reason.reason)
    // setUpContextMenus();
    setContextMenu()
    // if (reason.reason === chrome.runtime.OnInstalledReason.UPDATE) {
    //     OpenMyweb();
    // }
});
chrome.commands.onCommand.addListener((command) => {
    console.log(`Command: ${command}`);
});


function setContextMenu() {
    chrome.contextMenus.create({
        "title": 'Asif add me "%s"',
        "contexts": ["selection"],
        "id": "myContextMenuId"
    });
}

function OpenMyweb() {
    chrome.windows.create({
        url: 'http://localhost:8069'
    });
}

function injectedFunction() {
    document.body.style.backgroundColor = 'orange';
}


chrome.contextMenus.onClicked.addListener(function (info, tab) {
    console.log(tab)
    // chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     files: ['contentscript.js']
    // });
    chrome.tabs.sendMessage(tab.id, {type: "openModal"}, (response) => {
        console.log(response)
    });
    // chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    //     console.log(tabs[0].id)
    //     chrome.tabs.sendMessage(tabs[0].id, {type: "openModal"});
    // });
    // chrome.tabs.create({
    //     url: "http://www.google.com/search?q=" + encodeURIComponent(info.selectionText)
    // });
})


let callback = function (request, sender, sendResponse) {
    console.log('dsfsdf')
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['contentscript.js']
    });
    alert("rotti")
    switch (request.type) {
        case "openModal":
            $('#myModal').modal({
                backdrop: 'static',
                keyboard: false
            });
            break;
    }
};
chrome.runtime.onMessage.addListener(callback);


// chrome.runtime.onMessage.addListener(callback);

// alert(1)


// chrome.contextMenus.onClicked.addListener(function (itemData) {
//     if (itemData.menuItemId == "launcher0")
//         chrome.app.window.create('a.html', {id: 'a', outerBounds: {top: 0, left: 0, width: 300, height: 300}});
//     if (itemData.menuItemId == "launcher1")
//         chrome.app.window.create('b.html', {id: 'b', outerBounds: {top: 0, left: 310, width: 300, height: 300}});
// });
// // navigator.clipboard.readText().then(
// //     clipText => console.log(clipText));
// // Holds the data structure for all the context menus used in the app
// var CONTEXT_MENU_CONTENTS = {
//     forWindows: [
//         'foo',
//         'bar',
//         'baz'
//     ],
//     forSelection: [
//         'Selection context menu'
//     ],
//     forLauncher: [
//         'Launch Window "A"',
//         'Launch Window "B"'
//     ]
// }
//
// function setUpContextMenus() {
//     CONTEXT_MENU_CONTENTS.forWindows.forEach(function (commandId) {
//         chrome.contextMenus.create({
//             title: 'A: ' + commandId,
//             type: 'radio',
//             id: 'A' + commandId,
//             documentUrlPatterns: ["chrome-extension://*/a.html"],
//             contexts: ['all']
//         });
//     });
//
//     CONTEXT_MENU_CONTENTS.forWindows.forEach(function (commandId) {
//         chrome.contextMenus.create({
//             title: 'B: ' + commandId,
//             type: 'checkbox',
//             id: 'B' + commandId,
//             documentUrlPatterns: ["chrome-extension://*/b.html"],
//             contexts: ['all']
//         });
//     });
//
//     CONTEXT_MENU_CONTENTS.forSelection.forEach(function (commandId) {
//         chrome.contextMenus.create({
//             type: "separator",
//             id: 'sep1',
//             contexts: ['selection']
//         });
//         chrome.contextMenus.create({
//             title: commandId + ' "%s"',
//             id: commandId,
//             contexts: ['selection']
//         });
//     });
//
//     CONTEXT_MENU_CONTENTS.forLauncher.forEach(function (commandId, index) {
//         chrome.contextMenus.create({
//             title: commandId,
//             id: 'launcher' + index,
//             contexts: ['launcher']
//         });
//     });
// }


// var callback = function (request, sender, sendResponse) {
//     console.log('dsfsdf')
//     alert("rotti")
//     switch (request.type) {
//         case "openModal":
//             $('#myModal').modal({
//                 backdrop: 'static',
//                 keyboard: false
//             });
//             break;
//     }
// };
//


// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log('dsfsdf')
//     alert("Hasif")
//     switch (request.type) {
//         case "openModal":
//             $('#myModal').modal({
//                 backdrop: 'static',
//                 keyboard: false
//             });
//             break;
//     }
// });
