import { createContext, useState } from 'react';

export const Context = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {

    const [questions, setQuestions] = useState([])
    const [filter, setFilter] = useState()
    const [showFilters, setShowFilters] = useState(false)

    function checkEmptyValues(obj) {
        for (const key in obj) {
            if (typeof obj[key] === 'object') {
                if (Array.isArray(obj[key])) {
                    if (obj[key].length === 0) {
                        return true;
                    }
                } else {
                    if (checkEmptyValues(obj[key])) {
                        return true;
                    }
                }
            } else {
                if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
                    return true;
                }
            }
        }
        return false;
    }

    const [state, setState] = useState({
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
    });

    return (
        <Context.Provider value={{ state, setState, questions, setQuestions, filter, setFilter, showFilters, setShowFilters, checkEmptyValues }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
