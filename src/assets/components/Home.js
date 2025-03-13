import { useState } from "react";

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symptoms.trim()) {
      setError("Please enter symptoms to proceed.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch diagnosis. Please try again.");
      }

      const data = await response.json();
      setDiagnosis(data.diagnosis);
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>AI Symptom Checker</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter symptoms..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "none",
            background: "#007bff",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {isLoading ? "Checking..." : "Check Symptoms"}
        </button>
      </form>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {diagnosis && (
        <div style={{ marginTop: "20px", padding: "15px", background: "#f9f9f9", borderRadius: "4px" }}>
          <h3 style={{ color: "#333" }}>Diagnosis:</h3>
          <p style={{ color: "#555" }}>{diagnosis}</p>
        </div>
      )}
    </div>
  );
}

export default SymptomChecker;