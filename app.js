import express from "express";
import pkg from 'body-parser';
const { json } = pkg;

const app = express();

const port = 3000;
app.use(json());

// in memory ds to store and hold topics and subscribers
const topics = {};

// subscribe to a logic

app.post('/subscribe', (req, res) => {
    const {topicId, subscriberId} = req.body;

    if(!topics[topicId]){
        topics[topicId] = new Set();
    }

    topics[topicId].add(subscriberId);
    res.status(200).json({message : `subscriber ${subscriberId} subscribed to ${topicId}`});

});


// notify subscribers of the topic 
app.post('/notify', (req, res) =>{
    const {topicId} = req.body;

    if(!topics[topicId] || topics[topicId].size === 0){
        return res.status(200).json({message : `no subscribers to notify for the topic ${topicId}`});
    }

    const notifications = [];
    topics[topicId].forEach(subscriberId => {
        notifications.push(`notification sent to the subscriberid ${subscriberId}`);
    });

    res.status(200).json({notifications});
}); 

// unsubscribe to the topic please


app.post('/unsubscribe', (req, res) => {
    const {topicId, subscriberId} = req.body;

    if(topics[topicId] && topics[topicId].has(subscriberId)){
        topics[topicId].delete(subscriberId);
        return res.status(200).json({message:`subscriber ${subscriberId} unsubscribed from ${topicId}`});
    }

    res.status(200).json({message:`subscriber ${subscriberId} not found in the topic ${topicId}`});
});

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})
