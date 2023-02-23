import Grid from "@mui/material/Grid"
import ContainerCounterItem from "./ContainerCounterItem"
import {React, useEffect, useState} from 'react';

const ContainerItems = (
    {
        totalAmount,
        increaseAmount,
        decreaseAmount,
        increaseItemCounter,
        decreaseItemCounter,
        countersRecord,
    }) => {
    
    let [listItems,setListItems]= useState([])
    
    useEffect(()=>{
        let temporaryList = [];
        for( const item of countersRecord.values()){
            temporaryList = [...temporaryList, item]
        }
        setListItems(temporaryList)
    }, [countersRecord]);




    return (
        <Grid container spacing={3}
            sx={{
                marginRight:1,
            }}
        >
            {listItems.map((item) => (
            <ContainerCounterItem 
                key={item.id} 
                identifier={item.id}
                item={item}
                name={item.name} 
                cost={item.cost}
                img={item.img}
                count={item.counter}
                totalAmount={totalAmount}
                increaseAmount={increaseAmount}
                decreaseAmount={decreaseAmount}
                increaseItemCounter={increaseItemCounter}
                decreaseItemCounter={decreaseItemCounter}
            />
            ))}
        </Grid>
    )
}

export default ContainerItems