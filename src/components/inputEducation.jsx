import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Context } from '../context/provider';


export default function InputEducation() {

    const { state, setState } = useContext(Context);

    return (
        <div className='flex gap-4'>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, newValue) => setState({ ...state, education: newValue })}
                options={topQuestions}
                className='w-[100%] bg-[#f4f5f7]'
                renderInput={(params) => <TextField {...params} label="Escolaridade" />}
            />
        </div>
    );
}

const topQuestions = [
    { label: 'Superior' },
    { label: 'Médio' },
    { label: 'Fundamental' },
];

