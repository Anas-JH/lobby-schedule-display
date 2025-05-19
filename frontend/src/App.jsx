import React, { useState, useEffect } from 'react';
import appointmentService from './services/appointmentService';
import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterDate, setFilterDate] = useState('');

  const fetchAppointments = (date) => {
    setLoading(true);
    setError(null);
    const params = {};
    if (date) {
      params.appointment_date = date;
    }

    appointmentService.getAppointments(params)
      .then(response => {
        setAppointments(response.data.results || response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch appointments:", err);
        setError('Failed to load appointments. Please ensure the backend server is running and accessible.');
        setLoading(false);
      });
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFilterDate(today);
    fetchAppointments(today);
  }, []);

  const handleDateChange = (event) => {
    setFilterDate(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    fetchAppointments(filterDate);
  };

  if (loading) return <p>Loading appointments...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div className="App">
      <h1>Lobby Schedule Display</h1>
      
      <form onSubmit={handleFilterSubmit}>
        <label htmlFor="appointmentDate">Filter by Date: </label>
        <input 
          type="date" 
          id="appointmentDate" 
          value={filterDate} 
          onChange={handleDateChange} 
        />
        <button type="submit">Filter</button>
      </form>

      <h2>Appointments {filterDate ? `for ${filterDate}` : ''}</h2>
      {appointments.length === 0 ? (
        <p>No appointments found {filterDate ? `for ${filterDate}` : '.'}</p>
      ) : (
        <ul>
          {appointments.map(app => (
            <li key={app.id}>
              <strong>{app.title}</strong> - {app.client_name} ({app.provider_name})
              <br />
              When: {new Date(app.appointment_datetime).toLocaleString()}
              <br />
              Room/Location: {app.room_location || 'N/A'} | Status: {app.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
