'use strict';

import React from 'react';
import {NoteList} from './note-list.js';
import getMatchingNotes from '../scripts/search.js';
import sortNotes from '../scripts/sort.js';
import {AdditionForm} from './addition-form.js';
import {TableHead} from './head.js';
import {OkForm} from './ok-form.js';
import {storage} from '../scripts/storage.js';

export const NotebookApp = React.createClass({
    getInitialState: function () {
        return {
            notes: storage.load(),
            newNote: {
                name: '',
                phone: '',
                email: ''
            },
            searchQuery: '',
            hasStorageError: false
        };
    },
    render: function () {
        const state = this.state;

        return (
            <div className='container'>
                <div className='row'>
                    <input
                        onChange={this.handleSearchChange}
                        className='col s6 input-field'
                        maxLength='30'
                        placeholder='Filter'
                    />
                    <input
                        onClick={this.handleShowForm}
                        className='col s4 offset-s2 input-field btn'
                        type='button'
                        value='Add note'
                    />
                    <table className='striped'>
                        <TableHead sort={this.sort} />
                        <NoteList notes={getMatchingNotes(state.notes, state.searchQuery)} />
                    </table>
                    <AdditionForm
                        newNote={state.newNote}
                        handleSubmit={this.handleSubmit}
                        handleFieldChange={this.handleFieldChange}
                        handleCancel={this.handleCancel}
                    />
                    <OkForm
                        handleOkClick={this.handleOkClick}
                        hasStorageError={state.hasStorageError}
                    />
                </div>
            </div>
        );
    },
    handleSearchChange: function (event) {
        this.setState({
            searchQuery: event.target.value
        });
    },
    handleShowForm: function () {
        this.setStorageError(false);
        this.openModal('#form-add');
    },
    handleSubmit: function (event) {
        event.preventDefault();
        const nextNote = {
            note: this.state.newNote,
            id: Date.now()
        };
        const nextNotes = this.state.notes.concat([nextNote]);

        storage.save(nextNote, this.setStorageError);
        this.closeModal('#form-add');
        this.openModal('#form-ok');
        this.setState({
            notes: nextNotes,
            newNote: {
                name: '',
                phone: '',
                email: ''
            }
        });
    },
    handleFieldChange: function (event) {
        const currNewNote = this.state.newNote;
        const nextNewNote = {};

        Object.keys(currNewNote).forEach((key) => {
            if (key !== event.target.dataset.key) {
                nextNewNote[key] = currNewNote[key];
            } else {
                nextNewNote[key] = event.target.value;
            }
        });
        this.setState({
            newNote: nextNewNote
        });
    },
    handleCancel: function () {
        this.closeModal('#form-add');
        this.setState({
            newNote: {
                name: '',
                phone: '',
                email: ''
            }
        });
    },
    sort: function (event) {
        const dataSet = event.target.dataset;
        const sortType = dataSet.sort === 'asc' ? 'desc' : 'asc';

        dataSet.sort = sortType;
        this.setState({
            notes: sortNotes(this.state.notes, dataSet.key, sortType)
        });
    },
    handleOkClick: function () {
        this.closeModal('#form-ok');
    },
    openModal: function (elementId) {
        $(elementId).openModal();
    },
    closeModal: function (elementId) {
        $(elementId).closeModal();
    },
    setStorageError: function (hasError) {
        this.setState({
            hasStorageError: hasError
        });
    }
});
