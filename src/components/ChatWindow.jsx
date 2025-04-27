import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function ChatWindow() {
    const [sessionId, setSessionId] = useState('');
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const existing = sessionStorage.getItem('sessionId');
        if (existing) {
            setSessionId(existing);
        } else {
            const newSession = uuidv4();
            sessionStorage.setItem('sessionId', newSession);
            setSessionId(newSession);
        }
    }, []);

    const handleSend = async () => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { role: 'user', text: input }]);

        const response = await axios.post(`/api/ask?sessionId=${sessionId}`, { question: input });
        const answer = response.data.answer;

        setMessages((prev) => [...prev, { role: 'assistant', text: answer }]);
        setInput('');
    };

    return (
        <div>
            <h2>Chat</h2>
            <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black', padding: '10px' }}>
                {messages.map((msg, idx) => (
                    <div key={idx} style={{ textAlign: msg.role === 'user' ? 'right' : 'left' }}>
                        <strong>{msg.role === 'user' ? 'You' : 'Assistant'}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                style={{ width: '80%' }}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default ChatWindow;
