import { Button } from '@mui/material'
import './App.css'
import InputBanking from './components/inputBanking'
import InputDifficulty from './components/inputDifficulty'
import InputDiscipline from './components/inputDiscipline'
import InputEducation from './components/inputEducation'
import InputInstitution from './components/inputInstitution'
import InputSubject from './components/inputSubject'
import ContextProvider from './context/provider'
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import InputType from './components/inputType'
function App() {

  return (
    <ContextProvider>
      <div className='mb-14 pl-14 box-border h-[150px] text-[1.7rem] font-semibold text-[#fff] bg-[#121b2e] flex items-center '>
        Questões de Concursos
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='  w-full flex flex-col justify-center items-center gap-3 lg:flex-row'>
          <div className='w-[70%] flex flex-col gap-3'>
            <InputDiscipline />
            <InputSubject />
            <InputBanking />
          </div>
          <div className='w-[70%] flex flex-col gap-3'>
            <InputInstitution />
            <InputEducation />
            <InputDifficulty />
          </div>
          <div className='w-[70%] flex flex-col gap-3'>
            <InputType />
          </div>
        </div>
        <div className='w-[70%] flex flex-row  justify-between mt-3'>
          <Button className='w-[30%]' variant="outlined"><CloseIcon />Limpar Filtro</Button>
          <Button className='w-[30%]' variant="outlined"><SaveIcon />Salvar Filtro</Button>
          <Button className='w-[30%]' variant="contained">Filtrar Questões</Button>
        </div>
      </div>
    </ContextProvider>
  )
}

export default App
