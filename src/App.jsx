import React, { useState } from 'react';
import userPicture from '../src/assets/OIP.jpg'
import botPicture from '../src/assets/bot.jpg'
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  const handleAddMessage = () => {
    const messageInput = document.getElementById('messageInput');
    const newMessage = messageInput.value.trim();
    if (newMessage) {
      messageInput.value = '';
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);

      const lastMessageIndex = updatedMessages.length - 1;

      setTimeout(() => {
        const responseMessageElement = document.getElementById(`responseMessage-${lastMessageIndex}`);
        if (responseMessageElement) {
          responseMessageElement.innerText = 'Pinjam duit';
        }
      }, 1500);
    }
  };

  return (
    <div className="chat-container">
      <h1>Chat App</h1>
      <div className="chat-message bot-response">
        <div className='bot-response'>
            <img src={botPicture} alt="bot" />
            <p className='name'>Ryo Yamada</p>
         </div>
            <p className="bot-message">Minjem dulu seratus</p>
        {messages.map((message, index) => (
          <div key={index}>
            <div className='user-response'>
            <img src={userPicture} alt="user" />
            <p className='name'>User</p>
            <br />
            </div>
            <p className="user-message text-black">{message}</p>
           <div className='bot-response'>
            <img src={botPicture} alt="bot" />
            <p className='name'>Ryo Yamada</p>
            <br />
           </div>
            <p className="bot-message" id={`responseMessage-${index}`}>
              <em className='text-black'>Sedang mengetik...</em>
            </p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input type="text" id="messageInput" />
        <button onClick={handleAddMessage}>✈️</button>
      </div>
    </div>
  );
}

export default App;
