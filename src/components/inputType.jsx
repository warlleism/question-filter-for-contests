import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Context } from '../context/provider';


export default function InputType() {

    const { state, setState } = useContext(Context);

    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                onChange={(event, newValue) => setState({ ...state, type: newValue.label })}
                options={topQuestions}
                className='w-[100%] bg-[#f4f5f7]'
                renderInput={(params) => <TextField {...params} label="Tipo" />}
            />
        </div>
    );
}

const topQuestions = [
    { label: 'Múltipla escolha' },
    { label: 'Certo e errado' },
];

