function submitForm() {
    // Basic form validation
    var name = document.getElementById('name').value;
    var salary = document.getElementById('salary').value;
    var deductionAmount = document.getElementById('deductionAmount').value;

    if (name === '' || salary === '' || deductionAmount === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Form submitted successfully!');
        // You can add further actions here, like sending data to the server
    }
}
