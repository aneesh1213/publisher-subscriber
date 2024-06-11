// Function to subscribe to a topic
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const topicId = document.getElementById('topicId').value;
    const subscriberId = document.getElementById('subscriberId').value;

    fetch('/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ topicId, subscriberId })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Error:', error));
});
