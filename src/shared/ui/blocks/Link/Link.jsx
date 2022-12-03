import styled from "styled-components";

const StyledLink = styled.a`
    & {
        font-size: 16px;
        color: #727275;
        text-decoration: none;
        transition: .1s;
    }
    &:hover {
        color: #e3e0db;
        transition: .1s;
    }
    &:active {
        color: #fff;
    }
`

export default function Link( {children, href} ) {

    return (
        <StyledLink href={href} >
            {children}
        </StyledLink>
    )
}