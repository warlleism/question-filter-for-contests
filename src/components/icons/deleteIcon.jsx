import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { Context } from '../../context/provider';

export const DeleteItem = ({ id }) => {

    const { filter, setFilter } = useContext(Context);

    const removeFilter = () => {
        const remove = filter.filter((e) => e.id !== id)
        localStorage.setItem('filter', JSON.stringify(remove));
        setFilter(remove)
    };

    return (
        <div className='absolute right-0 top-[-30px] cursor-pointer' onClick={removeFilter}>
            <DeleteIcon className='text-[#f32e2eb5]' />
        </div>
    )

}