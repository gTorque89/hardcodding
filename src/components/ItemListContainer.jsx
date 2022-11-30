import React from 'react';

const ItemListContainer = ({greeting}) => {
    return(
        <div className='container py5'>
            <div className='row'>
                <div className='col-md-12'>
                    <p>{greeting}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;