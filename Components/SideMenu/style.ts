import styled from 'styled-components';

export const Menu = styled.div<{width: string}>`
    position: relative;
    background-color: #2a3042;
    width: ${props => props.width};
    transition: width .5s;
    height: 100vh;
`