import React from 'react';

const History = () => {
  // Example history data (you can replace this with dynamic data later)
  const history = [
    { id: 1, date: '2023-10-01', symptoms: 'Headache and fever', response: 'Possible cold. Rest and drink fluids.' },
    { id: 2, date: '2023-10-02', symptoms: 'Cough and sore throat', response: 'Possible flu. Consult a doctor if symptoms worsen.' },
  ];

  return (
    <div>
      <h2>Interaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Symptoms</th>
            <th>AI Response</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.symptoms}</td>
              <td>{entry.response}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;