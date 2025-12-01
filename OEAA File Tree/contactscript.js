const firebaseProjectUrl = 'https://oeaa-site-data-default-rtdb.firebaseio.com/';
const databaseUrl = firebaseProjectUrl + 'msg.json';

const submitButton = document.getElementById('submitButton');
submitButton.onclick = submitForm; // Tell browser whenever a click happens on submitButton, call submitForm.

async function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('your-message').value.trim();

    if (name || message) {
        const data = {name, email, message};
        try {
            const response = await fetch(databaseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }); 
            // fetch(): to make an HTTP request - POST request - write data to databaseUrl.
            // await: JS waits/pauses until the server responds. await has to be inside async func.

            if (!response.ok) { 
                throw new Error('Failed to send message');
            }
            showThanksAlert();
        } catch (error) {
            console.error('Error when sending message:', error);
        }
    }
}

function showThanksAlert() {
    alert("Thanks for your message. We will get back to you soon!");
}