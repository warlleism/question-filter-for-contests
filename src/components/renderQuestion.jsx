import { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormGroup, Button } from '@mui/material';
import { Questions } from '../questions/questions';

export const RenderQuestion = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [revealAnswers, setRevealAnswers] = useState(false);
    const [id, setId] = useState(0)

    const handleRadioChange = (questionIndex, option, id) => {
        setRevealAnswers(false)
        setId(id)
        setSelectedOptions((prevState) => ({
            ...prevState,
            [questionIndex]: option,
        }));
    };

    const revealCorrectAnswers = () => {
        setRevealAnswers(true);
    };

    return (
        <div>
            {Questions.map((e, index) => (
                <div key={index} className='mb-10'>
                    <div style={{ whiteSpace: 'pre-line' }}>{`${index + 1}. ${e.question.title}`}</div>
                    <FormGroup>
                        <RadioGroup
                            name={`question_${index}`}
                            value={selectedOptions[index] || ''}
                            onChange={(event) => handleRadioChange(index, event.target.value, e.id)}
                        >
                            {['a', 'b', 'c', 'd', 'e'].map((option) => (
                                <FormControlLabel
                                    key={option}
                                    style={{ borderRadius: 100, background: revealAnswers && id === e.id && e.question[option].r === 'c' ? 'rgb(163, 195, 255)' : 'transparent' }}
                                    value={option}
                                    control={<Radio />}
                                    label={`${option.toUpperCase()}) ${e.question[option].q}`}
                                />
                            ))}
                        </RadioGroup>
                    </FormGroup>
                    <Button variant="contained" color="primary" onClick={revealCorrectAnswers}>
                        Mostrar Resposta Correta
                    </Button>
                </div>
            ))}

        </div>
    );
};
