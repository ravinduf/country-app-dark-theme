import { useSelector } from 'react-redux';
import classNames from 'classnames';

function App() {

  const { dark } = useSelector((state) => state.darkTheme);

  return (
    <div className={classNames('theme', dark ? 'theme--dark' : 'theme--default')}>
      {/* className={'theme ' + (dark ? 'theme--dark' : 'theme--default') */}
      <h1 className="heading">Hello</h1>
    </div>
  );
}

export default App;
