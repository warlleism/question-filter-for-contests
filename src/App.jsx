import './App.css'
import InputBanking from './components/inputBanking'
import InputDifficulty from './components/inputDifficulty'
import InputDiscipline from './components/inputDiscipline'
import InputEducation from './components/inputEducation'
import InputInstitution from './components/inputInstitution'
import InputSubject from './components/inputSubject'
import ContextProvider from './context/provider'

function App() {

  return (
    <ContextProvider>
      <div className=' mt-3 w-full flex flex-col justify-center items-center gap-3 lg:flex-row'>
        <div className='w-[90%] flex flex-col gap-3'>
          <InputDiscipline />
          <InputSubject />
          <InputBanking />
        </div>
        <div className='w-[90%] flex flex-col gap-3'>
          <InputInstitution />
          <InputEducation />
          <InputDifficulty />
        </div >
      </div>
    </ContextProvider>
  )
}

export default App
