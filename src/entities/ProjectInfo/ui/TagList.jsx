import styled from "styled-components";

import Wrapper from "shared/ui/containers/Wrapper";
import Tag from "./Tag";


const CustomiseWrapper = styled(Wrapper)`
    width: 90%;
    flex-wrap: wrap;
    & span:not(:last-child) {
        margin-right: 10px;
    }
`

function TagList( {tags, bgColor} ) {
    return (
        <CustomiseWrapper >
            {tags.map( (tag, i) => <Tag name={tag} key={i} bgColor={bgColor} /> )}
        </CustomiseWrapper>
    )
}


export default TagList