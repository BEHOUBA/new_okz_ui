
function homePageLoaded() {
    document.getElementById("main").style.display = 'block'
    document.getElementById("home-spinner").style.display = 'none'
}


function loadMore() {
    document.getElementById("loadMore").style.display = 'none'
    document.getElementById("loadMore-spinner").style.display = 'block'
    setTimeout(() => {
        document.getElementById("loadMore-spinner").style.display = 'none'   
        document.getElementById("loadMore").style.display = 'inline'
    }, 5000);
}
function detailPageLoaded() {
    document.getElementById("detail").style.display = 'block'
    document.getElementById("detail-spinner").style.display = 'none'
}

function createPageLoaded() {
    document.getElementById("create").style.display = 'block'
    document.getElementById("create-spinner").style.display = 'none'
}