const factBtn = document.getElementById('fact-btn');
const outputDiv = document.getElementById('output');
const resultText = document.getElementById('result-text');
const sourceText = document.getElementById('source-text');

factBtn.addEventListener('click', () => {
    fetch('https://randomhistoricalfact.000webhostapp.com/fact', {
        mode: 'no-cors'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Using text() instead of json() since 'no-cors' mode doesn't allow accessing response body
        })
        .then(data => {
            console.log('Fetched data:', data);
            // Process the data as needed
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
