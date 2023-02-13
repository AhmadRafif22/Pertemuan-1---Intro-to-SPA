const root = document.getElementById("root");

// function untuk rendering navbar
function Navbar() {
    // link home
    const linkHome = document.createElement("a");
    linkHome.href = "#home";
    linkHome.textContent = "Home";
    linkHome.onclick = function(event) {
        event.preventDefault();
        const homeScreen = HomeScreen();
        root.innerHTML = "";
        root.append(homeScreen);
        history.pushState(null, "", event.target.href);
    };

    // link about
    const linkAbout = document.createElement("a");
    linkAbout.href = "#about";
    linkAbout.textContent = "About";
    linkAbout.onclick = function(event) {
        event.preventDefault();
        const aboutScreen = AboutScreen();
        root.innerHTML = "";
        root.append(aboutScreen);
        history.pushState(null, "", event.target.href);
    };

    const div = document.createElement("div");
    div.append(linkHome);
    div.append(linkAbout);

    return div;
}

// Function untuk rendering client side halaman about
function AboutScreen() {
    const linkHome = document.createElement("a");
    linkHome.href = "#home";
    linkHome.textContent = "Kembali ke Home";
    linkHome.onclick = function(event) {
        event.preventDefault();
        const homeScreen = HomeScreen();
        root.innerHTML = "";
        root.append(homeScreen);
        history.pushState(null, "", event.target.href);
    };


    const text = document.createElement("p");
    text.textContent = "Welcome to About";

    const div = document.createElement("div");
    div.append(linkHome);
    div.append(text);

    return div;
}

// Function untuk rendering client side halaman home
function HomeScreen() {
    const navbar = Navbar();

    const textPreview = document.createElement("p");

    const input = document.createElement("input");
    input.oninput = function (event) {
        textPreview.textContent = event.target.value;
    };
    input.placeholder = "Enter your name";

    const div = document.createElement("div");
    div.append(navbar);
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

