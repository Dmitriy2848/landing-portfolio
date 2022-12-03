import './App.css';
import Button from "shared/ui/blocks/Button";
import Description from "shared/ui/blocks/Description";
import Link from "shared/ui/blocks/Link";
import Heading from "shared/ui/blocks/Heading";
import Tag from "./shared/ui/blocks/Tag";
import Wrapper from "./shared/ui/containers/Wrapper";

function App() {
    return (
        <div className="App">
            <Button text='Button' />
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
            </Description>

            <Link href='yessr'>
                yes sior
            </Link>

            <Heading level={1}>
                yes sir
            </Heading>

            <Wrapper $for='tags'>
                <Tag name='JavaScript' dot />
                <Tag name='HTML' dot />
                <Tag name='CSS' dot />
            </Wrapper>

        </div>
    );
}

export default App;
