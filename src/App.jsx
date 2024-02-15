import './App.css'
import Home from './Views/Home'
import ContextProvider from './context/provider'
function App() {

  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  )
}

export default App
