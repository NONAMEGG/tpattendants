import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function AttendantsList() {
  const [attendants, setAttendants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('attendants')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setAttendants(data);
      }
    };

    fetchData(); 

    const intervalId = setInterval(fetchData, 5000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, []); 

  return (
    <div>
      <h1>Attendants</h1>
      <ul>
        {attendants.map(attendant => (
          <li key={attendant.id}>
            {attendant.name} {attendant.surname} - {attendant.email} - {attendant.birth_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendantsList;

