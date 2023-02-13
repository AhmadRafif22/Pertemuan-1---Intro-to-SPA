const root = document.getElementById("root");

function Link(props) {
    const link= document.createElement("a");
    link.href = props.href;
    link.textContent = props.label;
    link.onclick = function(event) {
        event.preventDefault();
        history.pushState(null, "", event.target.href);
        Render();
    };

    return link;
}

// function untuk rendering navbar
function Navbar() {
    const linkHome = Link({
        href: "#home",
        label: "Home",
    });

    const linkAbout = Link({
        href: "#about",
        label: "About",
    });

    const div = document.createElement("div");
    div.append(linkHome);
    div.append(linkAbout);

    return div;
}

// Function untuk rendering client side halaman about
function AboutScreen() {
    const linkHome = Link({
        href: "#home",
        label: "Kembali ke Home",
    });


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

// function render page sesuai page secara dinamis
function App() {
    const homeScreen = HomeScreen();
    const aboutScreen = AboutScreen();

    if (location.hash === "#about") {
        return aboutScreen;
    } else if (location.hash === "#home") {
        return homeScreen;
    }    
}

// function update app

function Render() {
    const app = App();
    root.innerHTML = "";
    root.append(app);
}

// untuk render pertama kali
Render();