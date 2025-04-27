import { useEffect, useState } from "react";
import { askQuestion } from "../api";
import { v4 as uuidv4 } from "uuid";

function ChatWindow() {
    const [sessionId, setSessionId] = useState("");
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        let savedSession = localStorage.getItem("sessionId");
        if (!savedSession) {
            savedSession = uuidv4();
            localStorage.setItem("sessionId", savedSession);
        }
        setSessionId(savedSession);
    }, []);

    const sendQuestion = async (q) => {
        try {
            const userQ = q || question;
            const answer = await askQuestion(sessionId, userQ);
            const newMessages = [...messages, { role: "user", content: userQ }, { role: "assistant", content: answer }];
            setMessages(newMessages.slice(-10)); // Keep only latest 10
            setQuestion("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="chat-window">
            <h2>Chat (RAG)</h2>
            <div className="messages">
                {messages.map((msg, idx) => (
                    <div key={idx} className={msg.role}>
                        <strong>{msg.role}:</strong> {msg.content}
                        {msg.role === "user" && (
                            <button onClick={() => sendQuestion(msg.content)}>Resend</button>
                        )}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask a question..." />
                <button onClick={() => sendQuestion()}>Send</button>
            </div>
        </div>
    );
}

export default ChatWindow;
