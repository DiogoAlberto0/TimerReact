import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 3rem;
        width: 3rem;
        
        color: ${props => props.theme.white};

        border: 3px solid transparent;

        &:hover {
            border-bottom: 3px solid ${props => props.theme["green-500"]};
        }
        &.active {
            color: ${props => props.theme["green-500"]};
        }
    }
`