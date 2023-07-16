import './App.css'
import ThemeProvider from './shared/styles/ThemeProvider';
import Home from './pages/home/Home';

const App = () => {

  // Theme logic to be implemented here
  const isDarkMode = true;

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <Home />
    </ThemeProvider>
  )
}

export default App
