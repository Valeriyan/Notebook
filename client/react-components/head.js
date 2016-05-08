'use strict';

import React from 'react';

export const TableHead = React.createClass({
    render: function () {
        return (
            <thead>
                <tr>
                    <th onClick={this.props.sort} data-sort='desc' data-key='name'>
                        <i className='material-icons prefix'>
                            {'sort_by_alpha'}
                        </i>
                        {'ФИО'}
                    </th>
                    <th onClick={this.props.sort} data-sort='desc' data-key='phone'>
                        <i className='material-icons prefix'>
                            {'sort_by_alpha'}
                        </i>
                        {'Телефон'}
                    </th>
                    <th onClick={this.props.sort} data-sort='desc' data-key='email'>
                        <i className='material-icons prefix'>
                            {'sort_by_alpha'}
                        </i>
                        {'email'}
                    </th>
                </tr>
            </thead>
        );
    }
});
