export const BACKEND_URL = "http://localhost:8080"; // adjust if needed

export async function uploadKnowledge(file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${BACKEND_URL}/api/upload`, {
        method: "POST",
        body: formData
    });
    if (!response.ok) {
        throw new Error("Failed to upload knowledge");
    }
}

export async function askQuestion(sessionId, question) {
    const response = await fetch(`${BACKEND_URL}/api/ask?sessionId=${sessionId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
    });
    if (!response.ok) {
        throw new Error("Failed to ask question");
    }
    return await response.text();
}
