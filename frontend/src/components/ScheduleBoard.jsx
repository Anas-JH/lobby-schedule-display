import React from 'react';
import ScheduleRow from './ScheduleRow';
import './ScheduleBoard.css'; // Import the CSS

const ScheduleBoard = ({ appointments }) => {
    if (!appointments || appointments.length === 0) {
        return <p className="no-appointments-text">No appointments to display.</p>;
    }

    return (
        <div className="schedule-board-container">
            <div className="schedule-board-header">
                <div>Time</div>
                <div>Appointment / Client</div>
                <div>Provider</div>
                <div>Room/Loc.</div>
                <div className="status-header">Status</div>
            </div>
            <div className="appointment-rows-container">
                {appointments.map(appointment => (
                    <ScheduleRow key={appointment.id} appointment={appointment} />
                ))}
            </div>
        </div>
    );
};

export default ScheduleBoard;
