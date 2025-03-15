export const diagnoseSymptoms = async (symptoms) => {
    const response = await fetch("http://127.0.0.1:5000/diagnose", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms }),
    });
    return response.json();
  };
  
  export const explainSymptoms = async (symptoms) => {
    const response = await fetch("http://127.0.0.1:5000/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms }),
    });
    return response.json();
  };
  
  export const saveChat = async (user_id, symptoms, diagnosis, explanation) => {
    const response = await fetch("http://127.0.0.1:5000/save-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id, symptoms, diagnosis, explanation }),
    });
    return response.json();
  };