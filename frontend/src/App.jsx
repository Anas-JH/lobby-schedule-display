import React, { useState, useEffect } from 'react';
import appointmentService from './services/appointmentService';
import ScheduleBoard from './components/ScheduleBoard';
import './App.css'; // Import main App styles

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
        const results = response.data.results || response.data;
        setAppointments(Array.isArray(results) ? results : []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch appointments:", err);
        setError('Failed to load appointments. Ensure the backend server is running and accessible.');
        setLoading(false);
      });
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFilterDate(today);
    // Initial fetch is handled by the second useEffect due to filterDate change
  }, []);

  useEffect(() => {
    if (filterDate) { // Fetch when filterDate is set/changed
      fetchAppointments(filterDate);
    }
    // Setup auto-refresh interval
    const intervalId = setInterval(() => {
      if (filterDate) { // Only refresh if filterDate is set
        fetchAppointments(filterDate);
      }
    }, 60000); // Fetch every 60 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount or when filterDate changes
  }, [filterDate]); // Re-run when filterDate changes

  const handleDateChange = (event) => {
    setFilterDate(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lobby Schedule Display</h1>
      </header>

      <div className="filter-form-container">
        <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="appointmentDate">Filter by Date: </label>
          <input
            type="date"
            id="appointmentDate"
            value={filterDate}
            onChange={handleDateChange}
          />
        </form>
      </div>

      {loading && <p className="loading-text">Loading appointments...</p>}
      {error && <p className="error-text">Error: {error}</p>}

      {!loading && !error && (
        <ScheduleBoard appointments={appointments} />
      )}
    </div>
  );
}

export default App;
