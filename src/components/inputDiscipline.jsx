import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Context } from '../context/provider';

export default function InputDiscipline() {
    const { state, setState } = useContext(Context);

    return (
        <div className='flex gap-4'>

            <Autocomplete
                isOptionEqualToValue={(option, value) => option.label === value.label}
                getOptionLabel={(option) => option.label}
                options={topQuestions}
                value={state.selectedValue}
                id="combo-box-demo"
                size="small"
                onChange={(event, newValue) => setState({ ...state, selectedValue: newValue })}
                className='w-[100%] bg-[#f4f5f7]'
                renderInput={(params) => <TextField {...params} label="Disciplinas" />}
            />

        </div>
    );
}

const topQuestions = [
    {
        label: 'Engenharia Civil',
        subjects: ['Mecânica dos Solos', 'Estruturas', 'Hidráulica']
    },
    {
        label: 'Sistemas de Informação',
        subjects: ['Banco de Dados', 'Análise de Sistemas', 'Gestão de Projetos de TI', 'Engenharia de Software']
    },
    {
        label: 'Direito',
        subjects: ['Direito Civil', 'Direito Penal', 'Direito Constitucional', 'Direito do Trabalho']
    },
];


