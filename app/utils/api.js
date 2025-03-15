// src/utils/api.js

// Function to fetch diagnosis from the backend
export const diagnoseSymptoms = async (symptoms) => {
    const response = await fetch("http://127.0.0.1:5000/diagnose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch diagnosis. Please try again.");
    }
  
    return response.json();
  };
  
  // Function to fetch explanation from the backend
  export const explainSymptoms = async (symptoms) => {
    const response = await fetch("http://127.0.0.1:5000/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch explanation. Please try again.");
    }
  
    return response.json();
  };
  
  // Function to save chat history to the backend
  export const saveChat = async (user_id, symptoms, diagnosis, explanation) => {
    const response = await fetch("http://127.0.0.1:5000/save-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id, symptoms, diagnosis, explanation }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to save chat history. Please try again.");
    }
  
    return response.json();
  };