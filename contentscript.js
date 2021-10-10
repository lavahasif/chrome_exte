// var imgURL = chrome.runtime.getURL("icons/Icon-192.png");
console.log("imgURL")
// document.getElementsByTagNameNS('div').src = imgURL;
var iframe = document.createElement('iframe');
iframe.src = chrome.runtime.getURL("html/modal.html");
iframe.frameBorder = 0;
iframe.id = "myFrame";
$(iframe).hide();//necessary otherwise frame will be visible
$(iframe).appendTo("body");
window.addEventListener("message", function (event) {
    console.log('message event')
    if (event.data.type == "hideFrame") {

        console.log('message event')
        $("#myFrame").show();
    }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('dsfsdf')
    alert("rotti")
    $('#myFrame').show()
    switch (request.type) {
        case "openModal":
            // $('#myModal').style.display='block'
            $('#myModal').modal({
                backdrop: 'static',
                keyboard: false
            })
            break;
    }
});
// throw  onmessageerror("second")
conole.log('File test alert');

// let callback = function (request, sender, sendResponse) {
//     console.log('dsfsdf')
//     alert("juli")
//     switch (request.type) {
//         case "openModal":
//             $('#myModal').modal({
//                 backdrop: 'static',
//                 keyboard: false
//             });
//             break;
//     }
// };
