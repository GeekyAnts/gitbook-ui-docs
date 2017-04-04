var currentPage = window.location.href;

// listen for changes
setInterval(function()
{
    if (currentPage != window.location.href)
    {
        currentPage = window.location.href;
        alert(currentPage);
    }
}, 500);
