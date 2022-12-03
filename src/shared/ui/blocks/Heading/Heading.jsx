import styled from "styled-components";

const StyledHeading = styled.div`
    & {
        color: #e3e0db;
        
    }
`

export default function Heading({level = 1, children}) {
    return (
        <StyledHeading as={`h${level}`}>
            {children}
        </StyledHeading>
    )
}