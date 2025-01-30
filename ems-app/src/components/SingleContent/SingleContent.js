import { Badge } from '@mui/material';
import React from 'react';
import { unavailable } from '../../config/config';
import './SingleContent.css'
function SingleContent({
    id,
    poster,
    title,
    date,
    vote,
    mediatype
}) {
    return (
        <div className='media'>
            <Badge badgeContent={vote} color={ vote < 8 ? 'primary' : 'secondary'} />
        <img className='poster' src={ poster } alt={ unavailable } style={{width:"200px"}}></img>
            <b className='title'>{title}</b>
            <span className='subtitle'>{mediatype}</span>
            <span className='subtitle'>{date}</span>
        </div>
    );
}

export default SingleContent;