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
    { label: 'Prefeitura Caucaia - Prefeitura de Caucaia - CE' },
    { label: 'Prefeitura de Varzea Alegre - Prefeitura de Várzea Alegre - CE - CE' },
    { label: 'Hospital Israelita Albert Einstein - Hospital Israelita Albert Einstein - SP' },
    { label: 'Camara de Tangua - Câmara de Tanguá - RJ' },
    { label: 'Camara de Pereiras - Câmara de Pereiras - SP' },
    { label: 'CMJF - Colégio Militar de Juiz de Fora - MG' },
    { label: 'CBM PI - Corpo de Bombeiros Militar do Piauí - PI' },
];
