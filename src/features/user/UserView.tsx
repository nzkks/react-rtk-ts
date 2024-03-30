import React, { useEffect } from 'react';
import { fetchUsers } from './userSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const UserView = () => {
  const userData = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

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
