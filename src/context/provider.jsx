import { createContext, useState } from 'react';

export const Context = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {

    const [questions, setQuestions] = useState([])
    const [filter, setFilter] = useState()
    const [showFilters, setShowFilters] = useState(false)

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
        <Context.Provider value={{ state, setState, questions, setQuestions, filter, setFilter, showFilters, setShowFilters }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
