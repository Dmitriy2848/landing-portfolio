import styled from "styled-components";


const Wrapper = styled.div`
    & {
        display: flex;
        flex-direction: ${ ( {flexDirection} ) => flexDirection || '' };
        width: ${ ( {width} ) => width || '' };
        max-width: ${ ( {maxWidth} ) => maxWidth || '' };
        
        height: ${ ( {height} ) => height || '' };
        padding: ${ ( {padding} ) => padding || '' };
        margin: ${ ( {margin} ) => margin || '' };
        background: ${ ( {bg} ) => bg || '' };

        overflow: ${ ( {overflow} ) => overflow || '' };
        max-height: ${ ( {maxHeight} ) => maxHeight || '' };
        transition: .2s;
    }
`


export default Wrapper;