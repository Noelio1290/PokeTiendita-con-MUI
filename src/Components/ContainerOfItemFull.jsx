import Grid from "@mui/material/Grid"
import ContainerCounterItem from "./ContainerCounterItem"

const ContainerItems = ({ListItem}) => {
    return (
        <Grid container spacing={3}
            sx={{
                marginRight:1,
            }}
        >
            {ListItem.map((item, index) => (
            <ContainerCounterItem item={item} key={index} />
            ))}
        </Grid>
    )
}

export default ContainerItems