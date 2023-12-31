import styled from "styled-components"

export const CountDownContainer = styled.div`
    font-family: 'Roboto-mono', monospace;
    font-size: 10rem;
    line-height: 8rem;

    display: flex;
    gap: 1rem;

    span {
        background-color: ${props => props.theme["gray-700"]};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`
export const Separator = styled.div`
    color: ${props => props.theme["green-500"]};
    padding: 2rem 0rem;
`