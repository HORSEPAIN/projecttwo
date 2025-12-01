const firebaseProjectUrl = 'https://oeaa-site-data-default-rtdb.firebaseio.com/';
const databaseUrl = firebaseProjectUrl + 'msg.json';

const submitButton = document.getElementById('submitButton');
submitButton.onclick = submitForm; // Tell browser whenever a click happens on submitButton, call submitForm.

async function submitForm() {
    const cfname = document.getElementById('cfname').value.trim();
    const clname = document.getElementById('clname').value.trim();
    const cexp = document.getElementById('cexp').value.trim();
    const cvn = document.getElementById('cvn').value.trim();

    if (cfname || clname || cexp || cvn) {
        const data = {cfname, clname, cexp, cvn};
        try {
            const response = await fetch(databaseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }); 
            // fetch(): to make an HTTP request - POST request - write data to databaseUrl.
            // await: JS waits/pauses until the server responds. await has to be inside async func.

            if (!response.ok) { 
                throw new Error('Failed to send information');
            }
            showThanksAlert();
        } catch (error) {
            console.error('Error when sending information:', error);
        }
    }
}

function showThanksAlert() {
    alert("Thanks for your Donation. Expect your bill soon!");
}