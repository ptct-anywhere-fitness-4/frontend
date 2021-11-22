import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { createClass } from '../actions';

function CreateClass(props) {
  const { user, createClass } = props;
  const initialFormValues = {
    name: '',
    type: '',
    date: new Date(),
    start_time: '00:00',
    duration: 10,
    registered_clients: 1,
    max_clients: '',
    instructor_id: user.id,
    intensity_id: 1,
    location_id: 1,
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formValues.date = date.toISOString();
    formValues.duration = parseInt(formValues.duration);
    formValues.max_clients = parseInt(formValues.max_clients);
    formValues.intensity_id = parseInt(formValues.intensity_id);
    formValues.location_id = parseInt(formValues.location_id);
    createClass(formValues, user.id);
  };

  return (
    <div className='flex items-center justify-center h-screen px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto'>
        <div>
          <div className='mt-10 sm:mt-0'>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
              <div className='md:col-span-1'>
                <div className='px-4 sm:px-0'>
                  <h3 className='text-lg font-medium leading-6 text-gray-900'>
                    Create Class
                  </h3>
                  <p className='mt-1 text-sm text-gray-600'>
                    Fill out every required input to create your class!
                  </p>
                </div>
              </div>

              <div className='mt-5 md:mt-0 md:col-span-2'>
                <form onSubmit={onSubmit}>
                  <div className='overflow-hidden shadow sm:rounded-md'>
                    <div className='px-4 py-5 bg-white sm:p-6'>
                      <div className='grid grid-cols-6 gap-6'>
                        <div className='col-span-6 sm:col-span-3'>
                          <label
                            htmlFor='name'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Class Name
                          </label>
                          <input
                            type='text'
                            name='name'
                            id='name'
                            required
                            onChange={onChange}
                            value={formValues.name}
                            className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                          <label
                            htmlFor='type'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Class Type
                          </label>
                          <input
                            type='text'
                            name='type'
                            id='type'
                            required
                            onChange={onChange}
                            value={formValues.type}
                            className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-4'>
                          <label
                            htmlFor='date'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Class Date
                          </label>
                          <Calendar
                            name='date'
                            id='date'
                            onChange={(date) => setDate(date)}
                            value={date}
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-4'>
                          <label
                            htmlFor='start_time'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Start Time
                          </label>
                          <input
                            type='time'
                            name='start_time'
                            id='start_time'
                            required
                            onChange={onChange}
                            value={formValues.start_time}
                            className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-4'>
                          <label
                            htmlFor='duration'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Duration
                          </label>
                          <input
                            type='number'
                            name='duration'
                            id='duration'
                            required
                            placeholder='(minutes)'
                            onChange={onChange}
                            value={formValues.duration}
                            step={5}
                            className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-4'>
                          <label
                            htmlFor='max_clients'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Max Clients
                          </label>
                          <input
                            type='number'
                            name='max_clients'
                            id='max_clients'
                            required
                            placeholder='(minutes)'
                            onChange={onChange}
                            value={formValues.max_clients}
                            step={5}
                            className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                          <label
                            htmlFor='intensity_id'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Intensity
                          </label>
                          <select
                            id='intensity_id'
                            name='intensity_id'
                            autoComplete='intensity_id'
                            required
                            onChange={onChange}
                            value={formValues.intensity_id}
                            className='block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          >
                            <option value={1}>Easy</option>
                            <option value={2}>Medium</option>
                            <option value={3}>Hard</option>
                          </select>
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                          <label
                            htmlFor='intensity_id'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Location
                          </label>
                          <select
                            id='location_id'
                            name='location_id'
                            autoComplete='location_id'
                            required
                            onChange={onChange}
                            value={formValues.location_id}
                            className='block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                          >
                            <option value={1}>Mc. Donalds</option>
                            <option value={2}>Planet Fitness</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center px-4 py-3 text-right bg-gray-50 sm:px-6'>
                      <button
                        type='submit'
                        className='inline-flex justify-center px-4 py-2 mx-8 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        Save
                      </button>
                      <button
                        className='inline-flex justify-center px-4 py-2 mx-8 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        onClick={() => navigate('/home')}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { createClass })(CreateClass);
