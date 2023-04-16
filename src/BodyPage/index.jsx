import dividerD from '../images/pattern-divider-desktop.svg'
import iconDice from '../images/icon-dice.svg'
import * as S from './styles'
import { useEffect, useState } from 'react'


export default function BodyPage () {

    const [slip, setDataAdvice] = useState('')

    useEffect(() => {
        callAdvice()
    }, [])
    

    // const adviceMok = {"slip": { "id": 135, "advice": "If you want to be happily married, marry a happy person."}}

    async function  callAdvice() {
        const reciveAdvice = await fetch('https://api.adviceslip.com/advice');
        let data = await reciveAdvice.json();
        

        if(!data) {
            setDataAdvice({"slip": { "id": 135, "advice": "If you want to be happily married, marry a happy person."}})
            return;
        }
        setDataAdvice(data.slip);
    }

    return (
        <div className="containerBodyPage">
            <S.WrapperBodyPage>
                <div className="advice">
                    ADVICE #{slip.id}
                </div>
                <div className="phraseApi">
                    "{slip["advice"]}"
                </div>
                <div className="dividers">
                    <img src={dividerD} />
                </div>
                <div className="iconDice" onClick={callAdvice}>
                    <img src={iconDice} />
                </div>
            </S.WrapperBodyPage>
        </div>
    )
}