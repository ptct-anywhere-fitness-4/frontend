import React, { useState } from 'react';

export default function Class(props) {
  const { fitClass, fitClassIdx } = props;
  /*
  {
    "id": 1,
    "name": "ULTRA SUPER FAT BURNING",
    "type": "HIIT",
    "date": "2021-11-21T16:34:59.129Z",
    "start_time": "12:30",
    "duration": 90,
    "registered_clients": 2,
    "max_clients": 15,
    "instructor_id": 1,
    "intensity_id": 2,
    "location_id": 2
  }
  */

  return (
    <tr
      key={fitClassIdx}
      className={fitClassIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
    >
      <td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>
        {fitClass.name}
      </td>
      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
        {fitClass.name}
      </td>
      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
        {fitClass.name}
      </td>
      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
        {fitClass.name}
      </td>
      <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
        <button className='text-indigo-600 hover:text-indigo-900'>Edit</button>
      </td>
    </tr>
  );
}
