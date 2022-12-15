import Wrapper from "shared/ui/containers/Wrapper";
import Heading from "shared/ui/blocks/Heading";


function Title( {title, color} ) {
    return (
        <Wrapper maxWidth='100%'>
            <Heading    level={2}
                        text={title}
                        color={color} />
        </Wrapper>
    )
}


export default Title