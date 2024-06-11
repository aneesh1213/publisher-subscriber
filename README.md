# Publisher Subscriber Notification System

## Overview
This project implements a publisher-subscriber notification system using Express.js. Subscribers can subscribe to topics, and they can be notified when there are updates on those topics.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/aneesh1213/publisher-subscriber.git
   cd publisher-subscriber

2. **install dependencies**:
     npm install

3. **start the server**:
    The server will run on http://localhost:3000.

## API ENDPOINTS

1. **SUBSCRIBE** :
     ## REQUEST:
       {
        "topicId": "topic1",
        "subscriberId": "sub1"
      }
     ## RESPONSE:
       {
          "message": "subscriber sub1 subscribed to topic1"
       }

2. **NOTIFY** :
     ## REQUEST :
       {
        "topicId": "topic1"
       }
     ## RESPONSE :
       {
          "notifications": [
            "notification sent to the subscriberid sub1"
            ]
       }

3. **UNSUBSCRIBE** :
    ## REQUEST:
       {
        "topicId": "topic1",
        "subscriberId": "sub1"
       }

   ## RESPONSE :
       {
        "message": "subscriber sub1 unsubscribed from topic1"
       }

## POSTMNAN COLLECTION :
    https://github.com/aneesh1213/publisher-subscriber/blob/master/postman_collection.json

## Project Structure
    app.js: The main application file where the Express server is configured.
    postman-collection.json: The Postman collection file with the API endpoints.

## Additional Notes
    This implementation uses in-memory data structures to manage topics and subscribers.
    Edge cases such as non-existent topics or subscribers are handled gracefully.


## Contact
    For any questions or issues, please contact:

    Name: Aneesh Kulkarni
    Email: aneeshkulkarni0920@gmail.com

  






  
