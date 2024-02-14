import { useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Context } from '../context/provider';


export default function InputDiscipline() {
    const { state, setState } = useContext(Context);

    useEffect(() => {
        let itens = state?.selectedValue?.subjects.map((e) => ({ label: e }));
        setState({ ...state, questions: itens })
    }, [state?.selectedValue]);

    return (
        <div className='flex gap-4'>

            <Autocomplete
                isOptionEqualToValue={(option, value) => option.label === value.label}
                getOptionLabel={(option) => option.label}
                options={topQuestions}
                value={state.selectedValue}
                id="combo-box-demo"
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
        subjects: ['Mecânica dos Solos', 'Estruturas', 'Hidráulica', 'Geotecnia']
    },
    {
        label: 'Engenharia de Produção',
        subjects: ['Gestão de Operações', 'Logística', 'Ergonomia', 'Qualidade']
    },
    {
        label: "Geologia",
        subjects: ['Petrologia', 'Geologia Estrutural', 'Geoquímica', 'Sismologia']
    },
    {
        label: 'Geografia',
        subjects: ['Climatologia', 'Geomorfologia', 'Cartografia', 'Desenvolvimento Regional']
    },
    {
        label: 'Gastronomia',
        subjects: ['Culinária Internacional', 'Técnicas Culinárias', 'Gastronomia Molecular', 'História da Gastronomia']
    },
    {
        label: 'Tecnologia da Informação',
        subjects: ['Desenvolvimento de Software', 'Redes de Computadores', 'Inteligência Artificial', 'Segurança da Informação']
    },
    {
        label: 'Sistemas de Informação',
        subjects: ['Banco de Dados', 'Análise de Sistemas', 'Gestão de Projetos de TI', 'Engenharia de Software']
    },
    {
        label: 'Direito',
        subjects: ['Direito Civil', 'Direito Penal', 'Direito Constitucional', 'Direito do Trabalho']
    },
    {
        label: 'Medicina',
        subjects: ['Anatomia', 'Fisiologia', 'Farmacologia', 'Clínica Médica']
    },
];


