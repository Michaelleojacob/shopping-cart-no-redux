import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './app/app';

const Script = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};

render(<Script />, document.getElementById('root'));
