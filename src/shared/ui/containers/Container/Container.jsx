import styled from "styled-components";


const Container = styled.div`
    & {
        width: ${ ( {width} ) => width || '' };
        height: ${ ( {height} ) => height || '' };
        margin: ${ ( {margin} ) => margin || '' };
        padding: ${ ( {padding} ) => padding || '' };
        display: flex;
        flex-direction: ${ ( {flexDirection} ) => flexDirection || 'column' };
        align-items: ${ ( {alignItems} ) => alignItems || '' };
        justify-content: ${ ( {justifyContent} ) => justifyContent || 'space-between' } ;
    }
`


export default Container;