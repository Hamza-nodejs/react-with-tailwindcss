import MyRoute from './Routes'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <MyRoute />
      </Router>
    </>
  )
}

export default App
