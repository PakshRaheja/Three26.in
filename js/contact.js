document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://35.154.16.90:3001/users', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            alert('Your message has been sent successfully!');
            document.getElementById('contactForm').reset(); // Optionally reset the form
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    }


    const inputs = document.querySelectorAll(".input-box input, .input-box textarea");

    inputs.forEach((input) => {
        input.addEventListener("blur", function () {
            if (this.value.trim() !== "") {
                this.classList.add("not-empty");
            } else {
                this.classList.remove("not-empty");
            }
        });
    });
});
