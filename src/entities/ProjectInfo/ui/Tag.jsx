import styled from "styled-components";


const StyledTag = styled.span`
    color: #fff;
    font-size: 14px;
    padding: 5px 7px;
    border-radius: 5px;
    background-color:  ${ ( {bgColor} ) => bgColor || '#ababaf' };
    margin-top: 10px;
`

function Tag( {name, bgColor} ) {
    return (
        <StyledTag bgColor={bgColor} >
            { `${name}` }
        </StyledTag>
    )
}


export default Tag;