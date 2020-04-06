import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from '@react-firebase/auth';
import { Router } from '@reach/router';
import 'firebase/auth';
import './app.pcss';
import Authenticated from './authenticated/index';
import InviteUser from './authenticated/invite-user';
import Unauthenticated from './unauthenticated';

const config = {
  apiKey: 'AIzaSyCKllrqo42ZWi9KKLfi-Q8nR_GXipKmZj8',
  authDomain: 'helpothers-1e974.firebaseapp.com',
  databaseURL: 'https://helpothers-1e974.firebaseio.com',
  projectId: 'helpothers-1e974',
  storageBucket: 'helpothers-1e974.appspot.com',
  messagingSenderId: '955757581627',
  appId: '1:955757581627:web:534cc9f4a3a218b5e6d31e',
};

interface AppInput {
  message: string;
}

export interface RouteFC {
  path: string;
}

const App: FC<AppInput> = ({ message }) => {
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user }) => {
          return isSignedIn ? (
            <Router>
              <Authenticated path="/" user={user}>
                <InviteUser path="invite" user={user} />
                <InviteUser path="other" user={user} />
              </Authenticated>
            </Router>
          ) : (
            <Router>
              <Unauthenticated path="/" />
            </Router>
          );
        }}
      </FirebaseAuthConsumer>
      <div className="m-4">{message}</div>
    </FirebaseAuthProvider>
  );
};

ReactDOM.render(<App message="Hello" />, document.getElementById('app'));
