import { useContext } from "react";
import { Context } from "../context/provider";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const ClearFilterButton = () => {
    const { setState } = useContext(Context);


    return <Button className='w-[30%]' variant="outlined" onClick={() => setState({
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
    })}><CloseIcon />Limpar Filtro</Button>
}