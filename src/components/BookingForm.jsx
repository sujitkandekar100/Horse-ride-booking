
/*import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBooking } from '../redux/actions'; // Correct path to actions
import './BookingForm.css';

const horses = [
  { id: 1, name: 'Thunder' },
  { id: 2, name: 'Lightning' },
  { id: 3, name: 'Storm' },
  { id: 4, name: 'Breeze' }
];

const BookingForm = () => {
  const [form, setForm] = useState({ horse: '', date: null, time: '', name: '', email: '', phone: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleDateChange = (date) => {
    setForm(prevForm => ({ ...prevForm, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.horse || !form.date || !form.time) {
      toast.error('Please fill in all fields');
      return;
    }
    dispatch(addBooking(form));
    sendCalendarInvite(form);
    toast.success(<div>Booking confirmed for {form.horse}!<br/>Thank you for your booking!</div>);
  };

  const sendCalendarInvite = (booking) => {
    const { name, email, horse, date, time } = booking;
    const startDate = new Date(date);
    startDate.setHours(parseInt(time.split(' ')[0])); // Assumes time is in format "X PM"

    const invite = `
      BEGIN:VCALENDAR
      VERSION:2.0
      BEGIN:VEVENT
      DTSTART:${startDate.toISOString().replace(/-|:|\.\d\d\d/g, '')}
      SUMMARY:Horse Ride with ${horse}
      DESCRIPTION:Thank you ${name} for booking a horse ride with ${horse}.
      END:VEVENT
      END:VCALENDAR
    `;

    const blob = new Blob([invite], { type: 'text/calendar' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'booking.ics';
    link.click();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Horse:
          <select name="horse" value={form.horse} onChange={handleChange} required>
            <option value="">Select a horse</option>
            {horses.map(horse => (
              <option key={horse.id} value={horse.name}>{horse.name}</option>
            ))}
          </select>
        </label>
        <label>
          Date:
          <DatePicker
            selected={form.date}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            required
          />
        </label>
        <label>
          Time:
          <select name="time" value={form.time} onChange={handleChange} required>
            <option value="">Select a time slot</option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={`${i + 3} PM`}>{`${i + 3} PM`}</option>
            ))}
          </select>
        </label>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default BookingForm;
*/
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBooking } from '../redux/actions'; 
import './BookingForm.css';

const horses = [
  { id: 1, name: 'Thunder' },
  { id: 2, name: 'Lightning' },
  { id: 3, name: 'Storm' },
  { id: 4, name: 'Breeze' }
];

const BookingForm = () => {
  const [form, setForm] = useState({ horse: '', date: null, time: '', name: '', email: '', phone: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleDateChange = (date) => {
    setForm(prevForm => ({ ...prevForm, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.horse || !form.date || !form.time) {
      toast.error('Please fill in all fields');
      return;
    }
    dispatch(addBooking(form));
    sendCalendarInvite(form);
    toast.success(<div>Booking confirmed for {form.horse}!<br/>Thank you for your booking!</div>);
    setForm({ horse: '', date: null, time: '', name: '', email: '', phone: '' });
  };

  const sendCalendarInvite = (booking) => {
    const { name, email, horse, date, time } = booking;
    const startDate = new Date(date);
    const [hours, period] = time.split(' ');
    const startHour = period === 'PM' ? (parseInt(hours) % 12) + 12 : parseInt(hours) % 12;
    startDate.setHours(startHour, 0, 0, 0);

    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1);

    const formatICSDate = (date) => {
      return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
    };

    const invite = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:Horse Ride with ${horse}
DESCRIPTION:Thank you ${name} for booking a horse ride with ${horse}.
END:VEVENT
END:VCALENDAR
    `;

    const blob = new Blob([invite], { type: 'text/calendar' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'booking.ics';
    link.click();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Horse:
          <select name="horse" value={form.horse} onChange={handleChange} required>
            <option value="">Select a horse</option>
            {horses.map(horse => (
              <option key={horse.id} value={horse.name}>{horse.name}</option>
            ))}
          </select>
        </label>
        <label>
          Date:
          <DatePicker
            selected={form.date}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            required
          />
        </label>
        <label>
          Time:
          <select name="time" value={form.time} onChange={handleChange} required>
            <option value="">Select a time slot</option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={`${i + 3} PM`}>{`${i + 3} PM`}</option>
            ))}
          </select>
        </label>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default BookingForm;




