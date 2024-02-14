import { createContext, useState } from 'react';

export const Context = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {

    const [state, setState] = useState({
        questions: [],
        selectedValue: null,
        subject: '',
        banking: '',
        institution: '',
        education: '',
        difficulty: '',
    });

    return (
        <Context.Provider value={{ state, setState }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
