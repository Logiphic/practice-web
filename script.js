
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("button");

    button.addEventListener("click", function(event){
        event.preventDefault(); // Prevent form submission
        const email = document.getElementById("email").value;
        const password = document.getElementById("pass").value;
        console.log("Email:", email);
        console.log("Password:", password);
        fetch("https://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                email: email, password: password })
            })
        // if(email === "admin" && password === "admin"){
        //     document.getElementById("msg").innerHTML = "Welcome admin!";
        // } else {
        //     document.getElementById("msg").innerHTML = "Wrong email or password!";
        // }
    });
});
