const linkHome = document.getElementById("link-home");
const linkAbout = document.getElementById("link-about");
const root = document.getElementById("root");

// mencegah ngelink, ubah url, dan mengubah konten root
linkHome.onclick = function(event) {
    event.preventDefault();
    const homeScreen = HomeScreen();
    root.innerHTML = "";
    root.append(homeScreen);
    // mengubah url
    history.pushState(null, "", event.target.href);
};

linkAbout.onclick = function(event) {
    event.preventDefault();
    const aboutScreen = AboutScreen();
    root.innerHTML = "";
    root.append(aboutScreen);
    // mengubah url
    history.pushState(null, "", event.target.href);
};

// Function untuk rendering client side halaman about
function AboutScreen() {
    const text = document.createElement("p");
    text.textContent = "Welcome to About";

    return text;
}

// Function untuk rendering client side halaman home
function HomeScreen() {
    const textPreview = document.createElement("p");

    const input = document.createElement("input");
    input.oninput = function (event) {
        textPreview.textContent = event.target.value;
    };
    input.placeholder = "Enter your name";

    const div = document.createElement("div");
    div.append(input);
    div.append(textPreview);
    
    return div;
}

// percabangan ketika mengakses url langsung
if (location.hash === "#about") {
    const aboutScreen = AboutScreen();
    root.innerHTML = "";
    root.append(aboutScreen);
} else if (location.hash === "#home") {
    const homeScreen = HomeScreen();
    root.innerHTML = "";
    root.append(homeScreen);
}

