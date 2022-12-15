import styled, {css} from "styled-components";


const PanelContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    will-change: transform;
    overflow: hidden;
    ${ ( {coords} ) => css` transform: translate(${coords?.x}00%, ${-coords?.y}00%); ` }};
`


export default PanelContainer