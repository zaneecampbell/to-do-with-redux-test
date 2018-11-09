import React from 'react';
import ListItem from './ListItem';

export const List = (props) => (
    <div className='content-container'>
        <h1 className='list-header'>Your List</h1>
        <div>
            {props.items.length === 0 && <p className='widget__message'>You've got nothing to do.</p>}
            {
                props.items.map((item, index) => (
                    <ListItem
                    key={item + Math.random()}
                    listText={item}
                    count={index + 1}
                    handleRemove={props.handleRemove}
                    />
                ))
            }
        </div>
    </div>
);

export default List;