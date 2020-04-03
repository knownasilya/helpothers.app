import React, { FC } from 'react';
import firebase from 'firebase/app';

interface AuthenticatedInput {
  user: object;
}

const Authenticated: FC<AuthenticatedInput> = ({ user }) => (
  <div className="m-4">
    {JSON.stringify(user)}
    <br />
    <button
      onClick={() => {
        firebase.auth().signOut();
      }}
    >
      Sign Out
    </button>
  </div>
);

export default Authenticated;
