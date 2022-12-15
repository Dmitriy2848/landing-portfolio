import styled, {css} from "styled-components";


const StyledWrapper = styled.div`
    position: absolute;
  
    top: ${ ( {top} ) => top || '' };
    right: ${ ( {right} ) => right || '' };
    bottom: ${ ( {bottom} ) => bottom || '' };
    left: ${ ( {left} ) => left || '' };
  
    z-index: 2;
  
    ${ ( {position} ) => {
        switch (position) {
            case 'top':
                return css`
                        top: 1em;
                        left: 50%;
                        transform: translateX(-50%);
                    `
            case 'bottom':
                return css`
                        bottom: 1em;
                        left: 50%;
                        transform: translateX(-50%);
                    `
            case 'right':
                return css`
                        right: 1em;
                        top: 50%;
                        transform: translateY(-50%);
                        rotate: 90deg;
                    `
            case 'left':
                return css`
                        left: 1em;
                        top: 50%;
                        transform: translateY(-50%);
                        rotate: -90deg;
                    `
            default:
                return false
        }
    }}
        
    ${ ( {hide} ) => {
        if (!hide) {
            return css`
                pointer-events: none; 
                opacity: 0;
                visibility: hidden;
            `
        }
    }}
`


export default StyledWrapper;