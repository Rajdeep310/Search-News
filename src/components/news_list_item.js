import React from 'react';

const NewsItem=(props)=>{
    console.log(props )
    return(
    
        <div className="news">
            <div><h3>{props.item.id} . {props.item.title}</h3></div>
            
            <div>{props.item.feed}</div>
        </div>
    
    )
}
export default NewsItem;