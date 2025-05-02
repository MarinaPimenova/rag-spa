import AdminUpload from "./components/AdminUpload";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
    return (
        <div className="app">
            <h1>RAG App</h1>
            <AdminUpload />
            <ChatWindow />
        </div>
    );
}

export default App;
