'use strict';

import React from 'react';

export const AdditionForm = React.createClass({
    render: function () {
        return (
            <form onSubmit={this.props.handleSubmit} id='form-add' className='modal'>
                <div className='modal-content'>
                    <label for='input-name'>{'Name'}</label>
                    <input
                        onChange={this.props.handleFieldChange}
                        type='text'
                        id='input-name'
                        data-key='name'
                        value={this.props.newNote.name}
                        maxLength='30'
                        required
                    />
                    <label for='input-phone'>{'Phone'}</label>
                    <input
                        onChange={this.props.handleFieldChange}
                        type='text'
                        id='input-phone'
                        data-key='phone'
                        value={this.props.newNote.phone}
                        maxLength='30'
                        required
                    />
                    <label for='input-email'>{'Email'}</label>
                    <input
                        onChange={this.props.handleFieldChange}
                        type='text'
                        id='input-email'
                        data-key='email'
                        value={this.props.newNote.email}
                        maxLength='30'
                        type='email'
                    />
                </div>
                <div className='modal-footer'>
                    <input
                        onClick={this.props.handleCancel}
                        type='button'
                        value='Cancel'
                        className='input-field btn-flat'
                    />
                    <button className='input-field btn-flat'>
                        {'Add'}
                    </button>
                </div>
            </form>
        );
    }
});
