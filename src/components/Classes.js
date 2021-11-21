import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Class from './Class';
import { grabClasses } from '../actions';

function Classes(props) {
  const { grabClasses, classes } = props;

  useEffect(() => {
    grabClasses();
  }, []);

  return (
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
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                  >
                    Title
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'
                  >
                    Role
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
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
component that re-arrangres the classes list based on class.time, class.instructor class.state etc.
*/

// needs own state depending on if the user is in or not in class

// needs privateRouting/blocked routing

// needs to check database to see and only show classes that the user has signed up for

// when the user clciks the button, it will show if they have registered/unregistered from a new / old calss

// register and login for client and instructor
const mapStateToProps = (state) => {
  return { classes: state.classes };
};
export default connect(mapStateToProps, { grabClasses })(Classes);
