import React from 'react';
import './movie-list-item.css'

function MovieListItem({name, viewers, favourite}) {
    return <div>
        <li className={`list-group-item  d-flex justify-content-between ${favourite && 'favourite'}`}>
            <span className='list-group-item-lable'>{name}</span>
            <input type="number" className='list-group-item input' defaultValue={viewers} />
            <div className='d-flex justify-content-center align-items-center'>
             <button type='button' className='btn-cookie btn-sm'>
            <i className='fas fa-cookie'></i>    
            </button>   
            <button type='button' className='btn-trash btn-sm'>
            <i className='fas fa-trash'></i>    
            </button> 
            <i className='fas fa-star'></i>
            </div>
        </li>
    </div>
}

export default MovieListItem;