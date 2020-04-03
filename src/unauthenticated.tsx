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
          <input className="border" type="email" id="email" />
        </div>

        <div>
          <label className="block" htmlFor="password">
            Password
          </label>
          <input className="border" type="password" id="password" />
        </div>

        <button className="p-2 bg-gray-300" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Unauthenticated;
