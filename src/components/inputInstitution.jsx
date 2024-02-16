import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Context } from '../context/provider';


export default function InputInstitution() {

    const { state, setState } = useContext(Context);

    return (
        <div className='flex gap-4'>

            <Autocomplete
                className='w-[100%] bg-[#f4f5f7]'
                disablePortal
                size="small"
                id="combo-box-demo"
                value={state.institution}
                onChange={(event, newValue) => setState({ ...state, institution: newValue.label })}
                options={topQuestions}
                renderInput={(params) => <TextField {...params} label="Instituição" />}
            />
        </div>
    );
}

const topQuestions = [
    { label: 'Prefeitura de Pacuja - Prefeitura de Pacujá - CE' },
    { label: 'Camara de Mogi Mirim - Câmara de Mogi Mirim - SP' },
    { label: 'Prefeitura de Ipumirim - Prefeitura de Ipumirim - SC' },
];
