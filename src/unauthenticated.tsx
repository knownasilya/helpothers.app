import * as React from 'react';
import * as firebase from 'firebase/app';

interface UnauthenticatedInput {}
interface SigninFormElements {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
type SigninElements = SigninFormElements & HTMLFormControlsCollection;

const Unauthenticated: React.FC<UnauthenticatedInput> = () => {
  function handleSignIn(event: React.SyntheticEvent) {
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
    <div className="m-4">
      <form onSubmit={handleSignIn}>
        <div>
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="email"
            id="email"
          />
        </div>

        <div className="mt-2">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="password"
            id="password"
          />
        </div>

        <div className="mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Unauthenticated;
