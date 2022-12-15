import styled from "styled-components";


const Positioning = styled.div`
    position: ${ ( {position} ) => position || 'absolute' };   
    top: ${ ( {top} ) => top || '' };
    left: ${ ( {left} ) => left || '' };
    right: ${ ( {right} ) => right || '' };
    bottom: ${ ( {bottom} ) => bottom || '' };
  
    width: ${ ( {width} ) => width || '' };    
    min-width: ${ ( {minWidth} ) => minWidth || '' };
    max-width: ${ ( {maxWidth} ) => maxWidth || '' };
    height: ${ ( {height} ) => height || '' };
    max-height: ${ ( {maxHeight} ) => maxHeight || '' };

    margin: ${ ( {margin} ) => margin || '' };
    z-index: ${ ( {zIndex} ) => zIndex || '' };
    transform: ${ ( {transform} ) => transform || '' };
    transition: .2s linear;
    overflow: ${ ( {overflow} ) => overflow || '' };
`


export default Positioning;