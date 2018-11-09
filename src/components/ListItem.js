import React from 'react';

export const ListItem = (props) => (
    <div className='list-item'>
        {props.listText}
        <button onClick={(e) => {props.handleRemove(props.listText)}}>Remove</button>
    </div>
);

export default ListItem;