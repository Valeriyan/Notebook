'use strict';

import React from 'react';

export const OkForm = React.createClass({
    render: function () {
        return (
            <div className='modal container' id='form-ok'>
                <p className='modal-content center-align'>
                    {this.getMessage()}
                </p>
                <div className='modal-footer'>
                    <input
                        onClick={this.props.handleOkClick}
                        type='button'
                        value='Ok'
                        className='input-field btn-flat'
                    />
                </div>
            </div>
        );
    },
    getMessage: function () {
        if (!Modernizr.localstorage) {
            return 'Sorry, but your browser does not support note addition';
        }
        if (this.props.hasStorageError) {
            return 'Attempt to add note has failed';
        }
        return 'Note has been successfully added';
    }
});
