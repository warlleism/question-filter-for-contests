import { Button } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import { useContext } from "react";
import { Context } from "../context/provider";

export const SaveFilterButton = () => {


    const { state } = useContext(Context);

    const handleSave = () => {
        const existingItems = localStorage.getItem('filter');

        if (existingItems) {
            const itemsArray = [...JSON.parse(existingItems), state];
            localStorage.setItem('filter', JSON.stringify(itemsArray));
        } else {
            localStorage.setItem('filter', JSON.stringify([state]));
        }
    };

    return <Button className='w-[30%]' variant="outlined" onClick={() => handleSave()}><SaveIcon />Salvar Filtro</Button>
}