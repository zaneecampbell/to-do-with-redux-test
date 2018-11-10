import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';

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
                    count={index}
                    />
                ))
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        items: state.list
    }
}

export default connect(mapStateToProps)(List);