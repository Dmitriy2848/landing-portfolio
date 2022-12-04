import styled, {css} from "styled-components";

const StyledWrapper = styled.div`
    & {
        display: flex;
        flex-direction: row;
        width: ${ ( {width} ) => width || '' };
        max-width: ${ ( {maxWidth} ) => maxWidth || '' };
        height: ${ ( {height} ) => height || '' };
        padding: ${ ( {padding} ) => padding || '' };
        margin: ${ ( {margin} ) => margin || '' };
        background: ${ ( {bg} ) => bg || '' };
    }
    ${ ( {$for} ) => {
        switch ($for) {
            case 'tags': 
                return css`
                    & span:not(:first-child) {
                      margin-left: 15px;
                    }
                `
            case 'links':
                return css`
                    
                `
            default:
                return true
        }
    }
}
`

export default function Wrapper( props ) {
    return (
        <StyledWrapper {...props} >
            {props.children}
        </StyledWrapper>
    )
}