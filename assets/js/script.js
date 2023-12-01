sessionStorage.setItem("enablecookies", true);
// OnClick function to hide cookie bar
function setSessionAndHideCookieBar(e) {
    e.preventDefault();

    sessionStorage.setItem("hidecookiebar", true);
    document.getElementById('cookie-bar').classList.add('hidden')
}

// Checks to see if session variable is set and hides cookie bar
if (sessionStorage.getItem('hidecookiebar')) {
    document.getElementById('cookie-bar').classList.add('hidden')
}

// onClick function to disable cookies
function turnCookiesOff(e) {
    e.preventDefault();

    document.getElementById('cookies-off-button').classList.add('hidden')
    document.getElementById('cookies-on-button').classList.remove('hidden')

    sessionStorage.setItem("enablecookies", false);
}

// onClick function to enable cookies
function turnCookiesOn(e) {
    e.preventDefault();

    document.getElementById('cookies-on-button').classList.add('hidden')
    document.getElementById('cookies-off-button').classList.remove('hidden')

    sessionStorage.setItem("enablecookies", true);
}

// Toggles the cookies on/off button on cookie policy page
if (window.location.pathname === '/cookie-policy') {
    if (!sessionStorage.getItem('enablecookies')) {
        document.getElementById('cookies-on-button').classList.add('hidden')
    } else {
        document.getElementById('cookies-off-button').classList.add('hidden')
    }
}