import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Class from './Class';
import {
  grabClasses,
  grabClientRegisteredClasses,
  registerClass,
  unregisterClass,
} from '../actions';

function Classes(props) {
  const {
    grabClasses,
    grabClientRegisteredClasses,
    registerClass,
    classes,
    user,
    registeredClasses,
    unregisterClass,
  } = props;

  useEffect(() => {
    grabClasses();
    grabClientRegisteredClasses(user.id);
  }, []);

  return (
    <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      Name & Type
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      Date & Time
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      Duration & Intensity
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                    >
                      Location
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((fitClass, fitClassIdx) => (
                    <Class
                      key={fitClassIdx}
                      fitClass={fitClass}
                      fitClassIdx={fitClassIdx}
                      user={user}
                      registerClass={registerClass}
                      registeredClasses={registeredClasses}
                      unregisterClass={unregisterClass}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    classes: state.classes,
    user: state.user,
    registeredClasses: state.user.registeredClasses,
  };
};
export default connect(mapStateToProps, {
  grabClasses,
  registerClass,
  grabClientRegisteredClasses,
  unregisterClass,
})(Classes);
