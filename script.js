// window.books = await chrome.bookmarks.getTree();
// console.log(books);
import("background.js")

document.getElementById("show").addEventListener("click", ShowFolder);
document.getElementById("create_tab").addEventListener("click", (e) => OpenMyweb_tabs("localhost:8069"));
document.getElementById("create_window").addEventListener("click", (e) => OpenMyweb_window("localhost:8069"));
document.getElementById("create_tab_sher").addEventListener("click", (e) => OpenMyweb_tabs("Shersoft.vindians.in"));
document.getElementById("create_window_sher").addEventListener("click", (e) => OpenMyweb_window("Shersoft.vindians.in"));


function create() {
    OpenMyweb();

}

function ShowFolder() {
    // chrome.downloads.showDefaultFolder()

    chrome.downloads.showDefaultFolder();
}

// var show = alert('hello');
function OpenMyweb_window(url) {
    chrome.windows.create({
        url: `http://${url}`
    });
}

function OpenMyweb_tabs(url) {
    chrome.tabs.create({
        url: `http://${url}`
    });
}
