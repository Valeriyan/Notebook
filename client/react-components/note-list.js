'use strict';

import React from 'react';

export const NoteList = React.createClass({
    render: function () {
        return (
            <tbody>
                {this.props.notes.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>
                                {item.note.name}
                            </td>
                            <td>
                                {item.note.phone}
                            </td>
                            <td>
                                {item.note.email}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        );
    }
});
