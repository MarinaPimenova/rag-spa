import AdminUpload from "./components/AdminUpload";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
    return (
        <div className="app">
            <h2>Ask Your Data (Practical Task#2)</h2>
            <AdminUpload />
            <ChatWindow />
        </div>
    );
}

export default App;
