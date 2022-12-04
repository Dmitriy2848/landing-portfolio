import styled from "styled-components";

const StyledFlexContainer = styled.div`
    & {
        width: ${ ( {width} ) => width || '' };
        height: ${ ( {height} ) => height || '' };
        margin: ${ ( {margin} ) => margin || '' };
        padding: ${ ( {padding} ) => padding || '' };
        display: flex;
        flex-direction: ${ ( {flexDirection} ) => flexDirection || 'column' };
        align-items: ${ ( {alignItems} ) => alignItems || '' };
        justify-content: space-between;
    }
`

function FlexContainer( props ) {
    return (
        <StyledFlexContainer {...props} >
            {props.children}
        </StyledFlexContainer>
    )
}

export default FlexContainer;