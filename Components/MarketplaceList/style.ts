import styled from 'styled-components';

export const MarketplaceListStyle = styled.div`
    height: 75%;
    background-color: white;
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        p {
            font-size: 0.6rem;
            font-weight: 700;
            width: 12%;
            text-align: center;
            &:first-child {
                text-align: left;
                width: 16%;
            }
        }
    }
`

export const RRPText = styled.p`
    background-color: ${props => `rgb(255, 0, 0, ${props.theme.opacity})`};
    border-radius: 3px;
`