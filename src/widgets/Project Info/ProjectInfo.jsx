import Wrapper from "../../shared/ui/containers/Wrapper";
import Heading from "../../shared/ui/blocks/Heading";
import Tag from "../../shared/ui/blocks/Tag";
import Description from "../../shared/ui/blocks/Description";
import Link from "../../shared/ui/blocks/Link";
import FlexContainer from "../../shared/ui/containers/FlexContainer";

function ProjectInfo() {
    return (
        <FlexContainer width={'400px'} >
            <Wrapper>
                <Heading level={2}>
                    Chroncy
                </Heading>
            </Wrapper>
            <Wrapper    $for='tags'
                        margin='15px 0' >
                <Tag name='HTML' dot />
                <Tag name='CSS' dot />
                <Tag name='JavaScript' dot />
                <Tag name='React' dot />
                <Tag name='Redux' dot />
            </Wrapper>
            <Wrapper margin='20px 0'>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
            </Wrapper>
            <Wrapper>
                <Link href={'dad'}>
                    see more
                </Link>
            </Wrapper>
        </FlexContainer>
    )
}
export default ProjectInfo;