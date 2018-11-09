import React from 'react';

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

export default Form;