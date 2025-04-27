import UploadKnowledge from './components/UploadKnowledge';
import ChatWindow from './components/ChatWindow';

function App() {
    return (
        <div style={{padding: '20px'}}>
            <h1>Simple RAG Chat</h1>
            <UploadKnowledge/>
            <ChatWindow/>
        </div>
    );
}

export default App;
