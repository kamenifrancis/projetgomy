
 
    import React, { useState, useEffect } from 'react';


    function  MessageList() {
      const [message, setMessage] = useState('');
      const [sentMessages, setSentMessages] = useState([]);
      const [receivedMessages, setReceivedMessages] = useState([]);
    
      const handleSendMessage = async (event) => {
        event.preventDefault();
        const newMessage = {
          text: message,
          sender: 'user',
          timestamp: new Date(),
        };
        setSentMessages([...sentMessages, newMessage]);
        setMessage('');
        try {
          const response = await fetch('', {
            method: 'POST',
            body: JSON.stringify(newMessage),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (!response.ok) {
            throw new Error('Erreur lors de l\'envoi du message.');
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        const fetchMessages = async () => {
          try {
            const response = await fetch('');
            if (!response.ok) {
              throw new Error('Erreur lors de la récupération des messages.');
            }
            const data = await response.json();
            setReceivedMessages(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchMessages();
      }, []);
    
      return (
        <div>
         
          <ul>
            {sentMessages.map((message, index) => (
              <li key={`sent-message-${index}`}>
                <div>{message.text}</div>
                <div>{message.timestamp.toLocaleString()}</div>
              </li>
            ))}
            {receivedMessages.map((message, index) => (
              <li key={`received-message-${index}`}>
                <div>Réponse : {message.text}</div>
                <div>{message.timestamp.toLocaleString()}</div>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Nouveau message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button type="submit">Envoyer</button>
          </form>
        </div>
      );
    }
    
    
    
   
    
    
    
    
export default MessageList;



