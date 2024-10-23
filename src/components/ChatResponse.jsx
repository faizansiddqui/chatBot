import React from 'react'

const ChatResponse = ({ messages }) => {
    return (
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <p><strong>User:</strong> {msg.user}</p>
            <p><strong>Bot:</strong> {msg.bot}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ChatResponse;
  