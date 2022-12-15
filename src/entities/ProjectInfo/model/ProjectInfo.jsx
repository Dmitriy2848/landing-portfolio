import {
    Title,
    TagList,
    Description,
    InfoContainer
} from '../ui'

import Button from "shared/ui/blocks/Button";




function ProjectInfo( {title, tags, description, styles} ) {
    return (
        <InfoContainer>
            <Title title={title} color={styles?.accentColor} />
            <TagList tags={tags} bgColor={styles?.accentColor} />
            <Description description={description} />
            <Button padding='5px 10px'
                    borderColor={styles?.accentColor}
                    color={styles?.accentColor} >
                Смотреть демо
            </Button>
        </InfoContainer>

    )
}


export default ProjectInfo;