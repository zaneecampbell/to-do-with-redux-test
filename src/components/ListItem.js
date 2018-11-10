import React from 'react';
import { removeList } from '../actions/list';
import { connect } from 'react-redux';

export const ListItem = (props) => (
    <div className='list-item'>
        {props.listText}
        <button onClick={(e) => {props.handleRemove(props.listText)}}>Remove</button>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleRemove: (listText) => dispatch(removeList(listText))
    }
}

export default connect(undefined, mapDispatchToProps)(ListItem);