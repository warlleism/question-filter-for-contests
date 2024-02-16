import { Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import { useContext } from "react";
import { Context } from "../context/provider";

export const SaveFilterButton = () => {
    const { state } = useContext(Context);

    const handleSave = () => {
        const existingItems = localStorage.getItem('filter');
        let itemsArray;
        if (existingItems) {
            const parsedItems = JSON.parse(existingItems);
            const id = parsedItems.length + 1;
            const newItem = { id: id ? id : 1, ...state };
            itemsArray = [...parsedItems, newItem];
        } else {
            const newItem = { id: 1, ...state };

            itemsArray = [newItem];
        }

        localStorage.setItem('filter', JSON.stringify(itemsArray));
    };

    return <Button className='w-[30%]' variant="outlined" onClick={() => handleSave()}><SaveIcon />Salvar Filtro</Button>
}
