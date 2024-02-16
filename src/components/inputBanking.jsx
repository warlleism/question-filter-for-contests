import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Context } from '../context/provider';


export default function InputBanking() {

    const { state, setState } = useContext(Context);

    return (
        <div className='flex gap-4 '>

            <Autocomplete
                disablePortal
                size="small"
                id="combo-box-demo"
                value={state?.banking}
                onChange={(event, newValue) => setState({ ...state, banking: newValue.label })}
                options={topQuestions}
                className='w-[100%] bg-[#f4f5f7]'
                renderInput={(params) => <TextField {...params} label="Banca" />}
            />
        </div>
    );
}

const topQuestions = [
    { label: 'ACAFE - Associação Catarinense das Fundações Educacionais' },
    { label: 'Instituto ACCESS' },
    { label: 'UECE - Universidade Estadual do Ceará' },
];
