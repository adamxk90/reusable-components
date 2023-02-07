import './App.css'
import MyComponent from './components/MyComponent'
import FullName from './components/FullName'
import Address from './components/Address'
import ProfilePhoto from './components/ProfilePhoto'

function App() {
  return (
    <div className="App">
      <MyComponent />
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  )
}

export default App
