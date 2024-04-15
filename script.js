document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add JavaScript functionality for form submission here, like sending the form data to a server
    // For now, let's just log the form data to the console
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    console.log(formDataObject);
});
