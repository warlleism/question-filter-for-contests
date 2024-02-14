

import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { Context } from '../context/provider';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

export default function InputDifficulty() {

    const { state, setState } = useContext(Context);
    console.log(state)

    return (
        <Stack
            spacing={3}
            className='w-[100%] bg-[#f4f5f7]'
        >
            <Autocomplete
                multiple
                id="tags-standard"
                options={topQuestions}
                getOptionLabel={(option) => option.label}
                onChange={(event, newValue) => setState({ ...state, difficulty: newValue })}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Dificuldade"
                        placeholder="Dificuldade"
                    />
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