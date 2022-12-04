import styled from "styled-components";

const StyledHeading = styled.div`
    & {
        color: #e3e0db;
        font-size: ${ ({level}) => level ? `${90 / level}px` : '14px' };
        text-transform: uppercase;
    }
    @media(max-width: 700px) {
      font-size: ${ ({level}) => level ? `${50 / level}px` : '14px' };;
    }
`

export default function Heading({level = 1, children}) {
    return (
        <StyledHeading as={`h${level}`} level={level} >
            {children}
        </StyledHeading>
    )
}