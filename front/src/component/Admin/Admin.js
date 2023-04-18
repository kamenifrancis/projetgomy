import React, { useState } from 'react';
function Admin() {
   const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Bonjour, jai un problème avec mon compte.' },
    { id: 2, text: 'Comment puis-je modifier mon adresse e-mail ?' },
    { id: 3, text: 'Je ne peux pas me connecter à mon compte, pouvez-vous m aider ?' },
  ]);
  const [response, setResponse] = useState('');

  const handleSendResponse = (event, messageId) => {
    event.preventDefault();
    setMessages(
      messages.map((message) => {
        if (message.id === messageId) {
          return {
            ...message,
            response: response,
          };
        }
        return message;
      })
    );
    setResponse('');
  };

  return (
    <div>
          <h1>Boîte de message</h1>
          <ul>
            {messages.map((message) => (
              <li key={message.id}>
                <div>{message.text}</div>
                {message.response ? (
                  <div>Réponse : {message.response}</div>
                ) : (
                  <form onSubmit={(event) => handleSendResponse(event, message.id)}>
                    <input
                      type="text"
                      placeholder="Répondre"
                      value={response}
                      onChange={(event) => setResponse(event.target.value)}
                    />
                    <button type="submit">Envoyer</button>
                  </form>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    


export default Admin
