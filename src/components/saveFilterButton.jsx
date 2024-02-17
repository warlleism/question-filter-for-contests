import { Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import { useContext } from "react";
import { Context } from "../context/provider";

// ... (import statements)

export const SaveFilterButton = () => {
    const { state, setFilter, setShowFilters, checkEmptyValues } = useContext(Context);
    const isAnyItemEmpty = checkEmptyValues(state);
    const handleSave = () => {
        if (isAnyItemEmpty) {
            console.error("Cannot save filter with empty items");
            return;
        }
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
        setFilter(itemsArray)
        localStorage.setItem('filter', JSON.stringify(itemsArray));
        setShowFilters(true)
    };

    return (
        <Button className='w-[30%]' style={{ background: isAnyItemEmpty ? "#121b2e5a" : "#121b2e", color: "#fff" }} variant="outlined" onClick={() => handleSave()} disabled={isAnyItemEmpty}>
            <SaveIcon />
            Salvar Filtro
        </Button>
    );
}
