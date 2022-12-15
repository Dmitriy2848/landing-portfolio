import styled from "styled-components";

import Paragraph from "shared/ui/blocks/Paragraph";


const CustomWrapper = styled.div`
  margin: 20px 0;
  max-width: 100%;
  max-height: 250px;
  overflow: auto;
  padding-right: 20px;
  text-align: justify;
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 100%;
    background-color: #3f3f3f;
    border-radius: 5px;
  }
`

function Description( {description} ) {
    return (
        <CustomWrapper>
            <Paragraph text={description} />
        </CustomWrapper>
    )
}


export default Description;