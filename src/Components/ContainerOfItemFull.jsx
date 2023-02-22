import Grid from "@mui/material/Grid"
import ContainerCounterItem from "./ContainerCounterItem"
import {React, useEffect, useState} from 'react';

const ContainerItems = ({countersRecord}) => {
    let [listItems,setListItems]= useState([])
    useEffect(()=>{
        let temporaryList = [];
        for( const item of countersRecord.keys()){
            temporaryList = [...temporaryList, item]
        }
        setListItems(temporaryList)
    }, [countersRecord])

    return (
        <Grid container spacing={3}
            sx={{
                marginRight:1,
            }}
        >
            {listItems.map((item, index) => (
            <ContainerCounterItem item={item} key={index} />
            ))}
        </Grid>
    )
}

export default ContainerItems