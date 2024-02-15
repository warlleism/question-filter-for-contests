

import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { Context } from '../context/provider';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

export default function InputDifficulty() {

    const { state, setState } = useContext(Context);
    console.log(state)

    return (
        <Stack spacing={3} className='w-[100%] '>
            <Autocomplete
                multiple
                size="small"
                id="size-small-outlined-multi"
                options={topQuestions}
                onChange={(event, newValue) => setState({ ...state, difficulty: newValue })}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField {...params} label="Dificuldade" placeholder="Dificuldade" />
                )}
            />
        </Stack>
    );
}

const topQuestions = [
    { label: 'Muito fácil' },
    { label: 'Fácil' },
    { label: 'Médio' },
    { label: 'Difícil' },
    { label: 'Muito difícil' }
];