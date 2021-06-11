import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(true);

  const handleDarkMode = () => {
    setDark(prevState => !prevState)
  }
  return (
    <div className={'theme ' + (dark ? 'theme--dark' : 'theme--default')}>
      <div className="body">
      <h1 className="heading">Hello</h1>
      </div>
      
    </div>
  );
}

export default App;
