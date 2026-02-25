function contact() {
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const sendBtn = document.getElementById("sendBtn");

    sendBtn.addEventListener("click", () =>{
        const nameInput = fullName.value.trim();
        const emailInput = email.value.trim();
        const messageInput = message.value.trim();
        if (!nameInput || !emailInput || !messageInput) {
            alert("All fields are required!");
            return;
        }
        alert(`
            Name: ${nameInput}\n
            Email: ${emailInput}\n
            Message: ${messageInput}\n\n\nYour message has been received. Thanks!`
        );
        // clear input fields.....

        clearInput();

    });
}

function clearInput() {
    fullName.value = "";
    email.value = "";
    message.value = "";

    nameInput.focus();
}

contact();

