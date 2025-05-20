import React from 'react';
import './ScheduleRow.css'; // Import the CSS

const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
};

// Helper to get status text (you can map codes to full words if desired)
const getStatusDisplay = (statusCode) => {
    const statusMap = {
        'SCH': 'Scheduled',
        'CNF': 'Confirmed',
        'ARR': 'Arrived',
        'PRO': 'In Progress',
        'CMP': 'Completed',
        'DEL': 'Delayed',
        'CAN': 'Cancelled',
        'NOS': 'No Show',
    };
    return statusMap[statusCode] || statusCode; // Fallback to code if not in map
};

const ScheduleRow = ({ appointment }) => {
    // Determine CSS class for status based on appointment.status
    const statusClass = `status-${(appointment.status || 'sch').toLowerCase()}`;

    return (
        <div className="schedule-row">
            <div className="time-cell">{formatTime(appointment.appointment_datetime)}</div>
            <div className="appointment-title-cell">
                {appointment.title}
                {appointment.client_name && <span className="client-name">{appointment.client_name}</span>}
            </div>
            <div>{appointment.provider_name || 'N/A'}</div>
            <div>{appointment.room_location || 'N/A'}</div>
            <div className={`status-cell ${statusClass}`}>{getStatusDisplay(appointment.status)}</div>
        </div>
    );
};

export default ScheduleRow;
