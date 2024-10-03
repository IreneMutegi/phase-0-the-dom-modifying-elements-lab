// Remove the <main> element with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set its id to 'victory'
newHeader.id = 'victory';

// Set the text content to 'Irene is the champion'
newHeader.textContent = 'Irene is the champion';

// Append the new header to the document body
document.body.appendChild(newHeader);
