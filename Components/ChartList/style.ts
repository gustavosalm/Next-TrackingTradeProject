import styled from 'styled-components';

export const FiltersContainer = styled.div`
    height: auto;
    width: 100%;
    background-color: white;
    padding: 0.6rem 1rem 1rem 1rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    p {
        margin-bottom: .4rem;
        font-weight: 500;
    }
    div:nth-child(2) {
        min-width: 15%;
    }
    .react-datepicker-wrapper {
        input {
            /* padding-left: 1rem;
            padding-right: 1rem; */
            min-width: 100%;
            width: 80px;
            background: transparent;
            cursor: pointer;
            border: none;
            color: inherit;
            font-size: 1rem;
            line-height: 1.6875rem;
            text-align: center;
            padding-bottom: 0;
        }
    }
    .react-datepicker-popper {
        z-index: 12;
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
`

export const ChartsContainer = styled.div`
    height: auto;
    max-height: 82%;
    width: 100%;
    .col {
        overflow: hidden;
        /* &:first-child {
            padding-left: 0 !important;
        } */
        >div {
            background-color: white;
            border-radius: 5px;
            padding: 1rem;
            >div{
                width: 100%;
                overflow-x: scroll;
                overflow-y: clip;
                &::-webkit-scrollbar {
                    height: 5px;
                }
                &::-webkit-scrollbar-thumb {
                    background-color: rgb(119, 122, 143, 1);
                    outline: 1px solid rgb(106, 109, 131, .5);
                    border-radius: 10px;
                }
            }   
        }
        .apexcharts-toolbar {
            position: absolute;
            right: auto;
            left: 3px;
        }
    }
    /* .container-fluid {
        max-height: 68.5vh;
        overflow-y: scroll;
        overflow-x: clip;
    } */
`