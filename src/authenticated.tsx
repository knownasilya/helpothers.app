import * as React from 'react';
import * as firebase from 'firebase/app';

interface AuthenticatedInput {
  user: object;
}

const Authenticated: React.FC<AuthenticatedInput> = ({ user }) => (
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
