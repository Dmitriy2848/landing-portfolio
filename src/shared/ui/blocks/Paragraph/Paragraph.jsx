import styled from "styled-components";


const StyledParagraph = styled.p`
    & {
        font-size: 16px;
        color: #fff;
        width: ${ ( {width} ) => width || '' };
    }
`

function Paragraph( {text} ) {
    return (
        <StyledParagraph>
            {text}
        </StyledParagraph>
    )
}


export default Paragraph


