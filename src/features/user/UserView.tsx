import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

export const UserView = () => {
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of users</h2>
      {userData.loading && <div>Loading...</div>}

      {!userData.loading && userData.error ? <div>Error: {userData.error}</div> : null}

      {!userData.loading && userData.users.length ? (
        <ul>
          {userData.users.map((user, index) => (
            <li key={index} style={{ listStyle: 'none' }}>
              {user.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
