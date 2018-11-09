import React from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions/list';

export class Form extends React.Component {

    handleAdd = (e) => {
        e.preventDefault();
        const item = e.target.item.value.trim();
        if (item === '') {
        } else {
        this.props.handleUpdate(item);
        }
    }

    render() {
        return (
            <div className='content-container'>
                <form onSubmit={this.handleAdd}>
                    <input type='text' name='item' autoComplete='off'/>
                    <button>Add to List</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleUpdate: (item) => dispatch(addList(item))
    }
}

export default connect(undefined, mapDispatchToProps)(Form);