function WriteToConsole() {
    let name = document.getElementById("name").value;
    console.log("Hello " + name);
    document.getElementById("message").innerHTML = "Hello " + name;
}
document.getElementById("sayHello").addEventListener("click", WriteToConsole);