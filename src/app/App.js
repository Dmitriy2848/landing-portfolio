import './App.css';
import Button from "shared/ui/blocks/Button";
import Description from "shared/ui/blocks/Description";
import Link from "shared/ui/blocks/Link";
import Heading from "shared/ui/blocks/Heading";
import Tag from "shared/ui/blocks/Tag";
import Wrapper from "shared/ui/containers/Wrapper";
import FlexContainer from "shared/ui/containers/FlexContainer/Container";
import Container from "shared/ui/containers/FlexContainer/Container";
import ProjectInfo from "widgets/Project Info";
import styled from "styled-components";


const AdaptiveContainer = styled(Container)`
`

function App() {
    return (
        <AdaptiveContainer  flexDirection='row'
                    alignItems='center'
                    height='100vh'
                    width='80%'
                    margin='0 auto'>
            <Wrapper height='60px'
                     margin='0 30px 0 0'>
                <Button text={'prev'} />
            </Wrapper>
            <FlexContainer flexDirection='row'
                            width='80%'>
                <ProjectInfo />
                <Wrapper width='50%'
                         height='400px'
                         bg='white'>
                </Wrapper>
            </FlexContainer>
            <Wrapper height='60px'
                     margin='0 0 0 30px'>
                <Button text={'next'} />
            </Wrapper>
        </AdaptiveContainer>
    );
}

export default App;