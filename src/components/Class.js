import React from 'react';
import { format } from 'date-fns';
import Moment from 'moment';

export default function Class(props) {
  const { fitClass, fitClassIdx } = props;

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
        {fitClass.duration} minutes
      </td>
      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
        {fitClass.location_name}
      </td>
      <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
        <button className='text-indigo-600 hover:text-indigo-900'>Edit</button>
      </td>
    </tr>
  );
}
