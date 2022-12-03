import styled from "styled-components";


const StyledButton = styled.button`
    & {
        outline: none;
        cursor: pointer;
        margin: ${ ( {margin} ) => margin || '' };
        padding: ${ ( {padding} ) => padding || '10px 15px' };
        font-size: 14px;
        color: #fff;
        background-color: ${ ( {bgColor} ) => bgColor || 'transparent' };
        backdrop-filter: blur(5px);
        border: ${ ( {border} ) => border || '1px solid #fff' };
        border-radius: 50px;
        transition: .2s;

    }
    &:active {
        transform: scale(95%);
    }
`

export default function Button( {text} ) {
    return (
        <StyledButton>
            {text}
        </StyledButton>
    )
}
