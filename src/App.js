import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Build by: <code>npx create-react-app project-name</code> command.
        </p>
        <p>Deployed on surge.sh: &emsp;
          <a 
          className="App-link"
          target='_blank' 
          href="https://react-basic-npx.surge.sh/"
          >
            react-basic-npx.surge.sh
            </a> 
          <br />
          <a
          className="App-link"
          href="https://github.com/aasif112/react-install-npx.git"
          target="_blank"
          >
          github repo:
          </a>
        </p>
       
      </header>
    </div>
  );
}

export default App;
