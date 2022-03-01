import { render } from 'react-dom';
import App from './app/app';

const Script = () => {
  return (
    <div>
      <App />
    </div>
  );
};

render(<Script />, document.getElementById('root'));
