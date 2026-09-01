//Step 1: Create a Custom Event

const myEvent = new CustomEvent("userLoggedIn", {
    detail: { 
        username: "tapaScript",
        role: "admin"
    }
});//first parameter is the event name, the second parameter is the object/function (data passing)

//Step 2: Listen to the Custom Event

document.addEventListener("userLoggedIn", (e) => {
    console.log(`User Login Detected ${e.detail.username}`);
})

//Step 3: Dispatching the Custom Event

document.dispatchEvent(myEvent);

function loginUser(username){
    const event = new CustomEvent("userLoggedIn", {
        detail: {username}
    });

    document.dispatchEvent(event);
}

document.addEventListener("userLoggedIn", (e) => {
    const user = e.detail.username;
    document.getElementById("welcome").textContent = `Welcome, ${user}!`;
});