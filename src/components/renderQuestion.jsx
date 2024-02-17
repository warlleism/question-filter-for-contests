import { useContext, useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormGroup, Button } from '@mui/material';
import { Context } from '../context/provider';

export const RenderQuestion = () => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [revealAnswers, setRevealAnswers] = useState(false);
    const [id, setId] = useState(0)
    const { questions } = useContext(Context);

    const handleRadioChange = (questionIndex, option, id) => {
        setRevealAnswers(false)
        setId(id)
        setSelectedOptions((prevState) => ({
            ...prevState,
            [questionIndex]: option,
        }));
    };

    const revealCorrectAnswers = (id) => {
        setId(id)
        setRevealAnswers(true);
    };

    return (
        <div>
            {questions.map((e, index) => (
                <div key={index} className='mb-10'>
                    <div style={{ whiteSpace: 'pre-line' }}>{`${index + 1}. ${e?.question.title}`}</div>
                    <FormGroup>
                        <RadioGroup
                            name={`question_${index}`}
                            value={selectedOptions[index] || ''}
                            onChange={(event) => handleRadioChange(index, event.target.value, e?.id)}
                        >
                            {['a', 'b', 'c', 'd', 'e'].map((option) => (
                                <FormControlLabel
                                    key={option}
                                    style={{
                                        transition: ".5s", borderRadius: 100, background: revealAnswers && id === e?.id && e?.question[option].r === 'c' ? 'rgb(163, 195, 255)' : 'transparent',
                                        border: revealAnswers && id === e?.id && e?.question[option].r === 'c' ? 'solid 2px rgb(31, 110, 255)' : 'solid 2px transparent'
                                    }}
                                    value={option}
                                    control={<Radio />}
                                    label={`${option.toUpperCase()}) ${e?.question[option].q}`}
                                />
                            ))}
                        </RadioGroup>
                    </FormGroup>
                    <Button variant="contained" style={{ background: "#121b2e" }} onClick={() => revealCorrectAnswers(e.id, index)}>
                        Mostrar Resposta Correta
                    </Button>
                </div>
            ))}

        </div>
    );
};
