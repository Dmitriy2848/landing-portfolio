import styled, {css} from "styled-components";

const StyledWrapper = styled.div`
    & {
        display: flex;
        flex-direction: row;
        width: ${ ( {width} ) => width || '' };
        height: ${ ( {height} ) => height || '' };
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

export default function Wrapper( {children, $for} ) {
    return (
        <StyledWrapper $for={$for} >
            {children}
        </StyledWrapper>
    )
}