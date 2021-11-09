import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ApointmentHeader from '../ApointmentHeader/ApointmentHeader';
import AvailableApointments from '../AvailableApointments/AvailableApointments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <ApointmentHeader date={date} setDate={setDate}></ApointmentHeader>
            <AvailableApointments date={date} ></AvailableApointments>
        </div>
    );
};

export default Appointment;