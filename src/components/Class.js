import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Moment from 'moment';

export default function Class(props) {
  const {
    registerClass,
    fitClass,
    fitClassIdx,
    user,
    registeredClasses,
    unregisterClass,
  } = props;
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    registeredClasses.forEach((regClass) => {
      if (regClass.class_id === fitClass.id) {
        setIsRegistered(true);
      }
    });
  }, []);

  const formattedISODate = (isoDate) => {
    const date = new Date(isoDate);
    return format(date, 'MMM do, YYY');
  };

  const militaryToStandard = (military) => {
    return Moment(military, 'HH:mm:ss').format('h:mm A');
  };

  return (
    <tr
      key={fitClassIdx}
      className={fitClassIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
    >
      <td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
        {fitClass.name} || {fitClass.type}
      </td>
      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
        {formattedISODate(fitClass.date)} ||{' '}
        {militaryToStandard(fitClass.start_time)}
      </td>
      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
        {fitClass.duration} minutes || {fitClass.intensity_name}
      </td>
      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
        {fitClass.location_name}
      </td>

      {user.isInstructor && user.id === fitClass.instructor_id && (
        <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
          <button className='text-indigo-600 hover:text-indigo-900'>
            Edit
          </button>
        </td>
      )}

      {!user.isInstructor && !isRegistered && (
        <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
          <button
            className='text-indigo-600 hover:text-indigo-900'
            onClick={() => {
              registerClass(user.id, fitClass.id);
              setIsRegistered(true);
            }}
          >
            Register
          </button>
        </td>
      )}

      {!user.isInstructor && isRegistered && (
        <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
          <button
            className='text-indigo-600 hover:text-indigo-900'
            onClick={() => {
              unregisterClass(user.id, fitClass.id);
              setIsRegistered(false);
            }}
          >
            Unregister
          </button>
        </td>
      )}
    </tr>
  );
}
// user prop, registerClass
