import React, { useState } from 'react';

export default function Class(props) {
  const { fitClass } = props;
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
  const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      role: 'Admin',
      email: 'jane.cooper@example.com',
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      role: 'Owner',
      email: 'cody.fisher@example.com',
    },
    // More people...
  ];
  return (
    <>
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
    </>
  );
}
