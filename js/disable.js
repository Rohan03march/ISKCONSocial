// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable F12 key and Ctrl+Shift+I (commonly used for developer tools)
document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});

// Disable Ctrl+U (view source)
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
});

// Detect if dev tools are opened and take action (this is not foolproof)
(function () {
    var threshold = 160;
    var isDevToolsOpen = false;
    var element = new Image();
    element.__defineGetter__('id', function () {
        isDevToolsOpen = true;
    });

    setInterval(function () {
        if (isDevToolsOpen) {
            alert('Developer tools detected!');
            isDevToolsOpen = false;
        }
    }, threshold);
})();
