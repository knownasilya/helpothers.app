import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './app.pcss';

interface AppInput {
  message: string;
}

const App: React.FC<AppInput> = ({ message }) => (
  <div className="m-4">{message}</div>
);

ReactDOM.render(<App message="Hello" />, document.getElementById('app'));
