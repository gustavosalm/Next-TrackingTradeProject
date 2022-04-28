import styled, { keyframes } from 'styled-components';

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Menu = styled.div<{
        props : {
            width: string,
            svgPosition: string,
            opacity: number
        }        
    }>`
    position: relative;
    background-color: #2a3042;
    width: ${prop => prop.props.width };
    transition: width .5s;
    height: 100vh;
    svg {
        position: absolute;
        transform: translateX(-50%);
        transition: top .5s, left .5s;
        ${prop => prop.props.svgPosition}
    }
    div {
        position: absolute;
        transition: opacity .5s;
        width: 100%;
        opacity: ${prop => prop.props.opacity};
        h6 {
            color: #fff;
            margin-top: 3.5rem;
            margin-left: 1.1rem;
            font-size: .7rem;
            color: #676e84;
        }
        p {
            position: absolute;
            color: white;
            top: 5.3rem;
            left: 3.3rem;
            font-size: 0.8rem;
            line-height: 1.5rem;
        }
    }
    
`