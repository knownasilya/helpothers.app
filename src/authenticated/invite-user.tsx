import React, { FC, useEffect } from 'react';
import { RouteFC } from '../app';

interface InviteProps {
  user: object;
  setTitle?: (value: string) => {};
}

const InviteUser: FC<InviteProps & RouteFC> = ({ setTitle }) => {
  useEffect(() => {
    setTitle('Invite User');
    return () => {
      setTitle('');
    };
  }, []);
  return (
    <form>
      <p>invite</p>
    </form>
  );
};

export default InviteUser;
