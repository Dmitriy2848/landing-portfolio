import styled, {css} from "styled-components";


const PanelsWrapper = styled.div`
    width: 100%;
    height: 100vh;
    transition: .2s;
    will-change: transform;
  
    ${ ( {move} ) => css`
      transform: translate(${-move?.x}00%, ${move?.y}00%);
    `}
`


export default PanelsWrapper;