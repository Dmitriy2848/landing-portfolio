import styled, {css} from "styled-components";


const ProjectsContainer = styled.div`
    height: 100vh;
    width: 100vw;   
    transition: .6s;
    overflow: visible;

    &:focus {
        outline: none;  
    }  
    
    ${ ( {zoom} ) => zoom && (
        css`
            transform: scale(.35);
            
        `
    ) }
`


export default ProjectsContainer;