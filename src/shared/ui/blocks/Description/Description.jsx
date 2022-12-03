import styled from "styled-components";

const StyledDescription = styled.p`
    & {
        font-size: 16px;
        color: #fff;
        width: ${ ( {width} ) => width || '' };
    }
    
`

export default function Description( {children} ) {
    return (
        <StyledDescription>
            {children}
        </StyledDescription>
    )
}

