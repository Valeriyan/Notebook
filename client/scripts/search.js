'use strict';

export default (notes, query) => {
    if (query === '') {
        return notes;
    }
    const displayedNotes = [];

    query = query.toLowerCase();
    notes.forEach((item) => {
        let isNoteMatching = false;

        Object.keys(item.note).forEach((noteKey) => {
            if (item.note[noteKey].toLowerCase().includes(query)) {
                isNoteMatching = true;
            }
        });
        if (isNoteMatching) {
            displayedNotes.push(item);
        }
    });
    return displayedNotes;
};
