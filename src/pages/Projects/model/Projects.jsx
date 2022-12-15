import {useState} from "react";

import Panels from "features/Panels";
import MoveButton from "entities/MoveButton";

import ProjectsContainer from "../ui";
import styled from "styled-components";


document.addEventListener('keydown', e => {
    if (e.code === 'Tab') e.preventDefault()
})


const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

function Projects( {panelMatrix} ) {
    const [move, setMove] = useState( {x: 0, y: 0} );
    const [zoom, setZoom] = useState(false)

    const availableSides = () => {
        let y0 = panelMatrix.indexOf( panelMatrix[ Math.floor(panelMatrix.length / 2) ] );
        let x0 = Math.floor(panelMatrix[y0 - move.y].length / 2)

        let currentY = y0 - move.y;
        let currentX = x0 + move.x;

        let right = !!panelMatrix[currentY][currentX + 1];
        let left = !!panelMatrix[currentY][currentX - 1];
        let bottom = !!panelMatrix[currentY + 1]?.[currentX]
        let top = !!panelMatrix[currentY - 1]?.[currentX]

        return { top, bottom, left, right }
    }

    let blockButton = availableSides();

    const moveTop = () => blockButton.top && setMove({...move, y: ++move.y});
    const moveBottom = () => blockButton.bottom && setMove({...move, y: --move.y})
    const moveLeft = () => blockButton.left && setMove({...move, x: --move.x})
    const moveRight = () => blockButton.right && setMove({...move, x: ++move.x})

    const arrowControl = (e) => {
        switch (e.key) {
            case 'Escape':
                setZoom(true)
                break
            case 'Enter':
                setZoom(false);
                break
            case 'ArrowUp':
                if (blockButton.top) moveTop();
                break
            case 'ArrowDown':
                if (blockButton.bottom) moveBottom();
                break
            case 'ArrowLeft':
                if (blockButton.left) moveLeft();
                break
            case 'ArrowRight':
                if (blockButton.right) moveRight();
                break
            default:
                return
        }
    }

    return (
        <Wrapper>
            <MoveButton position='top'
                        onClick={moveTop}
                        hide={blockButton.top} >
                top
            </MoveButton>
            <MoveButton position='bottom'
                        onClick={moveBottom}
                        hide={blockButton.bottom} >
                bottom
            </MoveButton>
            <MoveButton position='right'
                        onClick={moveRight}
                        hide={blockButton.right} >
                right
            </MoveButton>
            <MoveButton position='left'
                        onClick={moveLeft}
                        hide={blockButton.left} >
                left
            </MoveButton>

            <ProjectsContainer onKeyDown={arrowControl} tabIndex={-1} zoom={zoom} >
                <Panels move={move}
                        matrix={panelMatrix} />
            </ProjectsContainer>
        </Wrapper>

    )
}


export default Projects;