import { useSelector } from 'react-redux';
import classNames from 'classnames';

import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {

  const { dark } = useSelector((state) => state.darkTheme);

  return (
    <div className={classNames('theme', dark ? 'theme--dark' : 'theme--default')}>
      {/* className={'theme ' + (dark ? 'theme--dark' : 'theme--default') */}
      <div className="app">
        <Header />
        <Search />
      </div>
      
    </div>
  );
}

export default App;
