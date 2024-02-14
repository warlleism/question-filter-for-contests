import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Context } from '../context/provider';

export default function InputSubject() {

    const { state, setState } = useContext(Context);

    return (
        <div className='flex gap-4'>
            <Autocomplete
                disabled={!state.questions}
                disablePortal
                getOptionLabel={state.selectedValue?.title}
                id="combo-box-demo"
                options={state.questions}
                onChange={(event, newValue) => setState({ ...state, subject: newValue })}
                className='w-[100%] bg-[#f4f5f7]'
                renderInput={(params) => <TextField {...params} label="Assuntos" />}
            />
        </div>
    );
}
