import { render } from 'react-dom';
import './index.css';
import AppRouter from './app/router';

const Script = () => {
  return <AppRouter />;
};

render(<Script />, document.getElementById('root'));
