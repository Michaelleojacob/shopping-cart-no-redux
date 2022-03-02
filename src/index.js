import { render } from 'react-dom';
import AppRouter from './app/app';

const Script = () => {
  return <AppRouter />;
};

render(<Script />, document.getElementById('root'));
