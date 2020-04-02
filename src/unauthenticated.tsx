import * as React from 'react';

interface UnauthenticatedInput {}

const Unauthenticated: React.FC<UnauthenticatedInput> = () => (
  <div className="m-4">Login...</div>
);

export default Unauthenticated;
