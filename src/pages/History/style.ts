import styled from "styled-components";

const STATUS_COLORS = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500'
} as const
interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS
}
export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    line-height: 1.6;
    gap: 0.5rem;
    &::before {
        content: '';
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 50%;
        background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};

    }
`


export const HistoryContainer = styled.main`
    flex: 1;
    height: calc(100% - 10rem);

    padding: 2rem;

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme["gray-100"]};
    }
`


export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;
    table {
        width: 100%;
        min-width: 600px;
        border-collapse: collapse;
        ;
        
        th {
            background-color: ${props => props.theme["gray-600"]};
            color: ${props => props.theme["gray-100"]};
            padding: 1rem;
            text-align: left;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }
            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }

        td {
            background-color: ${props => props.theme["gray-700"]};
            border-top: 4px solid ${props => props.theme["gray-800"]};

            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                width: 50%;
                border-left: 1.5rem;
            }

            &:last-child {
                border-right: 1.5rem;
            }
        }
    }
`