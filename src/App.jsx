import './App.css'
import Card from './components/Card'
import DisclosureComponent from './components/DisclosureComponent'
function App() {

  return (
    <>
      <div>
        <Card name="Nike" price="500" status="in-stock" />
        <container className="question flex flex-row">
        <DisclosureComponent />
        <DisclosureComponent />
        </container>

      </div>
    </>
  )
}

export default App
