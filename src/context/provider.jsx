import { createContext, useState } from 'react';

export const Context = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {

    const [questions, setQuestions] = useState([])

    const [state, setState] = useState({
        selectedValue: null,
        subject: '',
        banking: '',
        institution: '',
        education: '',
        difficulty: '',
        type: ''
    });

    return (
        <Context.Provider value={{ state, setState, questions, setQuestions }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
