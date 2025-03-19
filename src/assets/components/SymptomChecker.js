// import React, { useState, useEffect } from "react";
// // import { diagnoseSymptoms, explainSymptoms, saveChat } from "../backend/aap/utils/api";

// function SymptomChecker() {
//   const [symptoms, setSymptoms] = useState("");
//   const [diagnosis, setDiagnosis] = useState("");
//   const [explanation, setExplanation] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isListening, setIsListening] = useState(false);
//   const [history, setHistory] = useState([]);

//   // Fetch diagnosis history from localStorage on component mount
//   useEffect(() => {
//     const savedHistory = localStorage.getItem("diagnosisHistory");
//     if (savedHistory) {
//       setHistory(JSON.parse(savedHistory));
//     }
//   }, []);

//   // Save diagnosis history to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("diagnosisHistory", JSON.stringify(history));
//   }, [history]);

//   // Handle voice input
//   const handleVoiceInput = () => {
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setSymptoms(transcript);
//       setIsListening(false);
//     };
//     recognition.start();
//     setIsListening(true);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!symptoms.trim()) {
//       setError("Please enter symptoms to proceed.");
//       return;
//     }

//     setIsLoading(true);
//     setError("");

//     try {
//       // Fetch diagnosis and explanation using imported functions
//       const diagnosisData = await diagnoseSymptoms(symptoms);
//       setDiagnosis(diagnosisData.diagnosis);

//       const explanationData = await explainSymptoms(symptoms);
//       setExplanation(explanationData.explanation);

//       // Save chat history
//       await saveChat("user_id", symptoms, diagnosisData.diagnosis, explanationData.explanation);

//       // Save to local history
//       setHistory((prev) => [...prev, { symptoms, diagnosis: diagnosisData.diagnosis }]);
//     } catch (err) {
//       setError(err.message || "An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Common symptoms
//   const commonSymptoms = ["Headache", "Fever", "Cough", "Sore throat", "Fatigue"];

//   return (
//     <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
//       <h1 style={{ textAlign: "center", color: "#007bff" }}>AI Symptom Checker</h1>

//       {/* Symptoms input form */}
//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//         <div style={{ display: "flex", gap: "10px" }}>
//           <input
//             type="text"
//             placeholder="Enter symptoms..."
//             value={symptoms}
//             onChange={(e) => setSymptoms(e.target.value)}
//             style={{
//               flex: 1,
//               padding: "10px",
//               borderRadius: "4px",
//               border: "1px solid #ccc",
//               fontSize: "16px",
//             }}
//           />
//           <button
//             type="button"
//             onClick={handleVoiceInput}
//             style={{
//               padding: "10px",
//               borderRadius: "4px",
//               border: "none",
//               background: "#28a745",
//               color: "white",
//               fontSize: "16px",
//               cursor: "pointer",
//             }}
//           >
//             {isListening ? "Listening..." : "🎤"}
//           </button>
//         </div>

//         {/* Suggested symptoms */}
//         <div style={{ marginTop: "10px" }}>
//           <p>Common symptoms:</p>
//           <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//             {commonSymptoms.map((symptom, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => setSymptoms(symptom)}
//                 style={{
//                   padding: "5px 10px",
//                   borderRadius: "4px",
//                   border: "none",
//                   background: "#6c757d",
//                   color: "white",
//                   fontSize: "14px",
//                   cursor: "pointer",
//                 }}
//               >
//                 {symptom}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Submit button */}
//         <button
//           type="submit"
//           disabled={isLoading}
//           style={{
//             padding: "10px",
//             borderRadius: "4px",
//             border: "none",
//             background: "#007bff",
//             color: "white",
//             fontSize: "16px",
//             cursor: "pointer",
//           }}
//         >
//           {isLoading ? (
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <div
//                 style={{
//                   width: "20px",
//                   height: "20px",
//                   border: "2px solid #fff",
//                   borderTop: "2px solid transparent",
//                   borderRadius: "50%",
//                   animation: "spin 1s linear infinite",
//                 }}
//               ></div>
//             </div>
//           ) : (
//             "Check Symptoms"
//           )}
//         </button>
//       </form>

//       {/* Error message */}
//       {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

//       {/* Diagnosis result */}
//       {diagnosis && (
//         <div style={{ marginTop: "20px", padding: "15px", background: "#f9f9f9", borderRadius: "4px" }}>
//           <h3 style={{ color: "#333" }}>Diagnosis:</h3>
//           <p style={{ color: "#555" }}>{diagnosis}</p>
//         </div>
//       )}

//       {/* Explanation */}
//       {explanation && (
//         <div style={{ marginTop: "20px", padding: "15px", background: "#f9f9f9", borderRadius: "4px" }}>
//           <h3 style={{ color: "#333" }}>Explanation:</h3>
//           <p style={{ color: "#555" }}>{explanation}</p>
//         </div>
//       )}

//       {/* Diagnosis history */}
//       {history.length > 0 && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Diagnosis History:</h3>
//           <ul>
//             {history.map((entry, index) => (
//               <li key={index} style={{ marginBottom: "10px" }}>
//                 <strong>Symptoms:</strong> {entry.symptoms} <br />
//                 <strong>Diagnosis:</strong> {entry.diagnosis}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SymptomChecker;