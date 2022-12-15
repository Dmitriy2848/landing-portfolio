import StyledWrapper from "../ui";
import Button from "shared/ui/blocks/Button";


function MoveButton({children, position, onClick, hide} ) {
    return (
        <StyledWrapper  position={position}
                        hide={hide} >
            <Button onClick={onClick}
                    border='none' >
                {children}
            </Button>
        </StyledWrapper>
    )
}


export default MoveButton;