'use strict';

const load = () => {
    const notes = [];

    if (!Modernizr.localstorage) {
        return notes;
    }
    Object.keys(localStorage).forEach((key) => {
        notes.push(JSON.parse(localStorage.getItem(key)));
    });
    return notes;
};

const save = (note, callback) => {
    if (!Modernizr.localstorage) {
        return;
    }
    try {
        localStorage.setItem(note.id.toString(), JSON.stringify(note));
    } catch (e) {
        callback(true);
    }
};

export const storage = {
    load,
    save
};
