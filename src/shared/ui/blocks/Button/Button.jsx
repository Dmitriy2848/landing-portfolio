import styled from "styled-components";


const StyledButton = styled.button`
    & {
        outline: none;
        cursor: pointer;
        margin: ${ ( {margin} ) => margin || '' };
        padding: ${ ( {padding} ) => padding || '' };
        font-size: 16px;
        color: #fff;
        background-color: ${ ( {bgColor} ) => bgColor || 'transparent' };
        border: ${ ( {border} ) => border || '1px solid' };
        border-radius: 50px;
        transition: .1s;
        height: ${ ( {height} ) => height || '' };
        opacity: .2;
        
    }
    &:hover {
        opacity: 1;
        border-color: ${ ( {borderColor} ) => borderColor || '#fff'};
        color: ${ ( {color} ) => color || '#fff'};
    }
`

function Button( props ) {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

export default Button;