import { Chip } from '@mui/material';
import React, { useEffect } from 'react';
import { default as GenersData} from '../geners.json'
function Geners({
    selectedGeners,
    setSelectedGeners,
    geners,
    setGeners
}) {
    const fetchGeners = ()=>{
        setGeners(GenersData)
    }
    const handleAdd = (gener) => {
        setSelectedGeners([...selectedGeners,gener])
        setGeners(geners.filter((g)=> g.id !== gener.id));
    }
    const handleRemove = (gener) =>{
        setSelectedGeners(
            selectedGeners.filter((selected)=> selected.id !== gener.id)
        )
        setGeners([...geners,gener])
    }
    useEffect(()=>{
        fetchGeners()

        return ()=>setGeners({})
        //eslint-disable-next-line
    },[])

    return (
        <div style={{padding:"6px 0"}} >
            {selectedGeners && selectedGeners.map((gener) => (
            <Chip label={gener.name} size='small' color='primary' key={gener.id} style = {{margin:2, alignItems:"center"}} clickable onDelete={()=>handleRemove(gener)} />
        ))}
        {geners && geners.map((gener) => (
            <Chip label={gener.name} size='small' key={gener.id} style = {{margin:2}} clickable onClick = {() => handleAdd(gener)} />
        ))}
        </div>
    );
}

export default Geners;