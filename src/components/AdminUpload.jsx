import { useState } from "react";
import { uploadKnowledge } from "../api";

function AdminUpload() {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("");

    const handleUpload = async () => {
        if (!file) return;
        try {
            await uploadKnowledge(file);
            setStatus("Upload successful!");
        } catch (error) {
            setStatus("Upload failed: " + error.message);
        }
    };

    return (
        <div className="admin-upload">
            <h2>Admin Upload Knowledge</h2>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
            {status && <p>{status}</p>}
        </div>
    );
}

export default AdminUpload;
