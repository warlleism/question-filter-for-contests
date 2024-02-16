import { Button } from "@mui/material"
import { useContext } from "react";
import { Context } from "../context/provider";
import AddIcon from '@mui/icons-material/Add';

export const ShowFilterButton = () => {

    const { filter, showFilters, setShowFilters } = useContext(Context);

    return <Button
        disabled={filter?.length === 0}
        className='w-[30%]' variant="contained" onClick={() => setShowFilters(!showFilters)}><AddIcon />
        <div className="text-[.6rem]">
            {filter?.length === 0 ? 'Sem filtros salvos' : 'Mostrar Filtros'}
        </div>
    </Button>
}