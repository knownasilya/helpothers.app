import * as React from 'react';

interface AuthenticatedInput {
  user: object;
}

const Authenticated: React.FC<AuthenticatedInput> = ({ user }) => (
  <div className="m-4">{JSON.stringify(user)}</div>
);

export default Authenticated;
