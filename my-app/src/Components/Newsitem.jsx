import React from 'react'
import '../App.css'


const Newsitem = (props) => {
    const { urlToImage, title, content, url,publishedAt } = props;
    return (
        <div className='card'>
            <p className='date' style={{fontSize:'10px',marginLeft:'15rem'}}>Published on: {publishedAt.slice(0,10)}</p>
            <figure>
                <img src={urlToImage} alt="No image" />
            </figure>
            <div className="data">
                <h4>{title}</h4>
                <p>{content? content.slice(0,80):""}...</p>
                <button className='btn'>
                    <a href={url} >Read more</a>    
                </button>  
            </div>
        </div>
    )
}

export default Newsitem;