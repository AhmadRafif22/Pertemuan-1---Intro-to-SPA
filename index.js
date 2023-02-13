const linkHome = document.getElementById("link-home");
const linkAbout = document.getElementById("link-about");
const root = document.getElementById("root");

// mencegah ngelink, ubah url, dan mengubah konten root
linkHome.onclick = function(event) {
    event.preventDefault();
    root.textContent = "Welcome to Home";
    // mengubah url
    history.pushState(null, "", event.target.href);
};

linkAbout.onclick = function(event) {
    event.preventDefault();
    root.textContent = "Welcome to About";
    // mengubah url
    history.pushState(null, "", event.target.href);
};

// percabangan ketika mengakses url langsung
if (location.hash === "#about") {
    root.textContent = "Welcome to About";
} else if (location.hash === "#home") {
    root.textContent = "Welcome to Home";
}


