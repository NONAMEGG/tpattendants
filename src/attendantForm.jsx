import React, { useState } from 'react';
import { supabase } from './supabaseClient';

function AddAttendantForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    birth_date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('attendants')
      .insert([formData]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      alert('Data inserted successfully!');
      setFormData({
        name: '',
        surname: '',
        email: '',
        birth_date: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Surname:</label>
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Birth Date:</label>
        <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} required />
      </div>
      <button type="submit">Add Attendant</button>
    </form>
  );
}

export default AddAttendantForm;

