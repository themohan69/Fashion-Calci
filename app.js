// Selecting elements from the DOM
const inputBox = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll('.btns button');

// Adding click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        
        // Handling different button actions
        switch(buttonText) {
            case 'C':
                inputBox.value = ''; // Clear input
                break;
            case '=':
                try {
                    inputBox.value = eval(inputBox.value); // Evaluate and display result
                } catch(error) {
                    inputBox.value = 'Error'; // In case of error during evaluation
                }
                break;
            default:
                inputBox.value += buttonText; // Concatenate button text to input
        }
    });
});
