import styled from 'styled-components';

export const ProductStyle = styled.div`
    background-color: rgb(35, 96, 195);
    position: relative;
    border-radius: 5px;
    height: 150px;
    margin-bottom: 1rem;
    overflow: hidden;
    padding: 5px 8px;
    h1 {
        font-size: 0.8rem;
        margin: 0;
        color: white;
    }
    p {
        font-size: 0.6rem;
        margin-top: 0;
        color: white;
    }
    div {
        background-color: white;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 47%;
        width: 100%;
        text-align: right;
        padding: 5px 10px;
        p {
            color: #000;
        }
    }
`;