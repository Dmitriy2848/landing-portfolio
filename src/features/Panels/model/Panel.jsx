import React from "react";

import ProjectInfo from "entities/ProjectInfo/model/ProjectInfo";
import {PanelContainer} from "../ui";


const Panel = React.memo( function( {title, tags, description, coords, styles} ) {
    return (
        <PanelContainer coords={coords}  >
            <ProjectInfo   title={title}
                           tags={tags}
                           description={description}
                           styles={styles} />
        </PanelContainer>
    )
})


export default Panel;