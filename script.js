// window.books = await chrome.bookmarks.getTree();
// console.log(books);
import("background.js")

document.getElementById("show").addEventListener("click", ShowFolder);
document.getElementById("create_tab").addEventListener("click", OpenMyweb_tabs);
document.getElementById("create_window").addEventListener("click", OpenMyweb_window);

function create() {
    OpenMyweb();

}

function ShowFolder() {
    // chrome.downloads.showDefaultFolder()

    chrome.downloads.showDefaultFolder();
}

// var show = alert('hello');
function OpenMyweb_window() {
    chrome.windows.create({
        url: 'http://localhost:8069'
    });
}

function OpenMyweb_tabs() {
    chrome.tabs.create({
        url: 'http://localhost:8069'
    });
}
