import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppRouter from './app/app';

const Script = () => {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
};

render(<Script />, document.getElementById('root'));
