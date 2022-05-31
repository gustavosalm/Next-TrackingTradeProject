import styled from 'styled-components';

export const ChartContainer = styled.div`
    svg.tooltipIcon {
        position: absolute;
        top: 5px;
        left: 35px;
        z-index: 12;
        &:hover +div {
            opacity: 0.8;
        }
        +div.tooltip {
            background-color: #c4c4c4;
            border-radius: 0.3rem;
            top: 1.5rem;
            padding: 0 .5rem;
            text-align: center;
        }
    }
`