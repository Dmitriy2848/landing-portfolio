import Panel from "./Panel";

import {PanelsWrapper} from "../ui";


function Panels( {matrix, move} ) {
    let panels = matrix.map( line =>
        line.map( panel => {
            return (
                panel &&
                <Panel title={panel.name}
                       tags={panel.tags}
                       description={panel.text}
                       key={panel.name}
                       coords={panel.coords}
                       styles={panel.styles} />
            )
        })
    );
    return (
        <PanelsWrapper move={move}>
            {panels}
        </PanelsWrapper>
    )
}


export default Panels