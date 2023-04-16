import styled from "styled-components";


export const WrapperBodyPage = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');
    font-family: 'Manrope', sans-serif;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 300px;
    width: 550px;
    background-color: hsl(217, 19%, 24%);
    margin-top: 300px;
    border-radius: 22px;

    .iconDice {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: -30px;
        background-color: hsl(150, 100%, 66%);
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
    }

    .dividers {
        position: absolute;
        bottom: 50px;
    }

    .advice {
        color: hsl(150, 100%, 66%);
        font-size: 14px;
        letter-spacing: 2px;
        margin-top: 40px;
        margin-bottom: 30px;
        font-weight: 500;
    }

    .phraseApi {
        text-align: center;
        color: hsl(193, 38%, 86%);
        font-weight: 800;
        font-size: 21px;
    }

`