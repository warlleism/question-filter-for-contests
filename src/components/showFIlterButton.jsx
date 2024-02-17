import { Button } from "@mui/material"
import { useContext } from "react";
import { Context } from "../context/provider";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const ShowFilterButton = () => {

    const { filter, showFilters, setShowFilters } = useContext(Context);
    return <Button
        disabled={filter?.length === 0}
        className='w-[120px]' variant="contained" style={{ background: filter?.length > 0 ? "#121b2e" : "#121b2e5a", color: "#fff" }} onClick={() => setShowFilters(!showFilters)}>
        <div className="text-[.6rem]">
            {showFilters ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />} Filtros
        </div>
    </Button>
}