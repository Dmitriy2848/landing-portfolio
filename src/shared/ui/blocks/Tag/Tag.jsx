import styled from "styled-components";

const StyledTag = styled.span`
    & {
        color: #727275;
        font-size: 16px;
    }
`

export default function Tag({dot, name}) {
    return (
        <StyledTag>
            { `${dot ? '\u{2022}' : ''} ${name}` }
        </StyledTag>
    )
}