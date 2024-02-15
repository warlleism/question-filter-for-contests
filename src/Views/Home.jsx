import { Button } from '@mui/material'
import InputBanking from '../components/inputBanking'
import InputDifficulty from '../components/inputDifficulty'
import InputDiscipline from '../components/inputDiscipline'
import InputEducation from '../components/inputEducation'
import InputInstitution from '../components/inputInstitution'
import InputSubject from '../components/inputSubject'
import InputType from '../components/inputType'
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { RenderQuestion } from '../components/renderQuestion'
import { FilterButton } from '../components/filterButton'

function Home() {

    return (
        <div>
            <div className='w-full mb-14 pl-14 box-border h-[150px] text-[1.7rem] font-semibold text-[#fff] bg-[#121b2e] flex items-center '>
                Questões de Concursos
            </div>
            <div className=' w-full flex flex-col justify-center items-center lg:w-[80%] mx-auto'>
                <div className=' w-full flex flex-col justify-center items-center lg:items-start gap-3 lg:flex-row'>
                    <div className='w-[70%] flex flex-col gap-3 lg:w-[100%]'>
                        <InputDiscipline />
                        <InputSubject />
                        <InputBanking />
                    </div>
                    <div className='w-[70%] flex flex-col gap-3 lg:w-[100%]'>
                        <InputInstitution />
                        <InputEducation />
                        <InputDifficulty />
                    </div>
                    <div className='w-[70%] flex flex-col gap-3 lg:w-[100%]'>
                        <InputType />
                    </div>
                </div>
                <div className='w-[70%] flex flex-row  justify-between lg:w-[100%] mt-5'>
                    <Button className='w-[30%]' variant="outlined"><CloseIcon />Limpar Filtro</Button>
                    <Button className='w-[30%]' variant="outlined"><SaveIcon />Salvar Filtro</Button>
                    <FilterButton />
                </div>
                <div className='w-[70%] flex flex-row  justify-between mt-3 lg:w-[100%]'>
                    <RenderQuestion />
                </div>
            </div>
        </div>
    )
}

export default Home;