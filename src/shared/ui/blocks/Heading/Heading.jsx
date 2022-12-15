import styled from "styled-components";

const StyledHeading = styled.div`
    & {
        color:  ${ ( {color} ) => color || '#e3e0db' } ;
        font-size: ${ ({level}) => level ? `${90 / level}px` : '14px' };
        text-transform: uppercase;
    }
    @media(max-width: 700px) {
      font-size: ${ ({level}) => level ? `${50 / level}px` : '14px' };;
    }
`

function Heading({level = 1, text, color}) {
    return (
        <StyledHeading as={`h${level}`} level={level} color={color}>
            {text}
        </StyledHeading>
    )
}

export default Heading