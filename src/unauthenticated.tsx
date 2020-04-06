import React, { FC, SyntheticEvent } from 'react';
import firebase from 'firebase/app';
import { RouteFC } from './app';

interface SigninFormElements {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
type SigninElements = SigninFormElements & HTMLFormControlsCollection;

const SignIn: FC<{}> = () => {
  function handleSignIn(event: SyntheticEvent) {
    event.preventDefault();
    let target: HTMLFormElement = event.target as HTMLFormElement;
    let elements = target.elements as SigninElements;
    firebase
      .auth()
      .signInWithEmailAndPassword(
        elements.email.value,
        elements.password.value
      );
  }

  return (
    <form
      className="max-w-sm rounded overflow-hidden shadow-lg p-5"
      onSubmit={handleSignIn}
    >
      <h2 className="text-lg font-semibold">Sign In</h2>

      <div className="mt-4">
        <label className="block" htmlFor="email">
          Email
        </label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="email"
          id="email"
        />
      </div>

      <div className="mt-4">
        <label className="block" htmlFor="password">
          Password
        </label>
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="password"
          id="password"
        />
      </div>

      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

const Unauthenticated: FC<RouteFC> = () => {
  return (
    <div className="m-4 grid grid-cols-2 gap-1">
      <SignIn />
    </div>
  );
};

export default Unauthenticated;
