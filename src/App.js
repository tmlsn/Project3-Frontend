import styles from './App.module.css';
import { Signup } from './components';
import { Navbar } from './components/Navbar';
import { Home } from './pages';

function App() {
  return (
    <div className={styles.textColor}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
