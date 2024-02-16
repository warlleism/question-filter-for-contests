/* eslint-disable no-unused-vars */
import { Button } from "@mui/material"
import { useContext } from "react";
import { Context } from "../context/provider";
import { Questions } from '../questions/questions';

export const FilterButton = () => {

    const { state, setQuestions } = useContext(Context);

    const filterQuestions = () => {
        const filteredQuestions = Questions.filter((e) => {
            const validType = e.type === state.type;
            const validSubject = e.subject === state.subject;
            const validDifficulty = state.difficulty.some(diff => e.difficulty.includes(diff.label));
            const validEducation = e.education === state.education;
            const validBanking = e.banking === state.banking;
            const validInstitution = e.institution === state.institution;
            const validCourse = e.course === state.selectedValue.label;

            return validType && validSubject && validDifficulty && validEducation && validBanking &&
                validInstitution && validCourse;
        });

        setQuestions(filteredQuestions);
    }

    return (
        <>
            <Button className='w-[30%]' variant="contained" onClick={() => filterQuestions()}>Filtrar Questões</Button>
        </>
    )
}
