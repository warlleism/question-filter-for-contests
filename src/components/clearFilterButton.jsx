import { useContext } from "react";
import { Context } from "../context/provider";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const ClearFilterButton = () => {
    const { setState, setQuestions } = useContext(Context);

    const clearFilter = () => {
        setQuestions([])
        setState({
            selectedValue: {
                label: '',
                subjects: []
            },
            subject: '',
            banking: '',
            institution: '',
            education: '',
            difficulty: [],
            type: ''
        })
    }

    return <Button className='w-[30%]' style={{ background: "#121b2e", color: "#fff" }} variant="outlined" onClick={clearFilter}><CloseIcon />Limpar Filtro</Button>
}