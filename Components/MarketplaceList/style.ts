import styled from 'styled-components';

export const MarketplaceListStyle = styled.div`
    height: calc(100% - 10rem);
    background-color: white;
    padding: 0.6rem .7rem 0 .7rem;
    border-radius: 5px;
    overflow-x: visible;
    .react-datepicker-wrapper {
        input {
            min-width: 0;
            width: 80px;
            background: transparent;
            cursor: pointer;
            border: none;
            color: inherit;
            font-size: 0.8rem;
            line-height: 1.6875rem;
            text-align: center;
        }
    }
    .react-datepicker {
        .react-datepicker__header {
            background-color: #2b72e8;
            * {
                color: white;
            }
        }
        .react-datepicker__day--selected {
            background-color: #2b72e8;
            border-radius: 50%;
        }
    }
    .dropdown button {
        padding: 0.3125rem 0;
        font-size: 0.8rem;
    }
    .dropdown-toggle::after {
        content: none;
    }
    >div:not(:first-child) {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: .4rem;
        p, strong {
            font-size: 0.6rem;
            line-height: 1rem;
            width: 12%;
            margin-bottom: .4rem;
            text-align: center;
            &:first-child {
                text-align: left;
                width: 16%;
            }
        }
        div {
            position: absolute;
            bottom: 0;
            height: 1px;
            width: 101%;
            left: -0.5%;
            background-color: rgb(243, 244, 247);
        }
    }
`

export const RRPText = styled.p<{opacity: number}>`
    background-color: ${props => `rgb(255, 74, 74, ${props.opacity})`};
    border-radius: 3px;
`