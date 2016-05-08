'use strict';

export default (notes, key, sortType) => {
    const sortCoeff = sortType === 'asc' ? 1 : -1;

    return notes.sort((itemA, itemB) => {
        const valueA = itemA.note[key];
        const valueB = itemB.note[key];

        if (valueA === '' && valueB !== '') {
            return sortCoeff;
        }
        if (valueA !== '' && valueB === '') {
            return -sortCoeff;
        }
        if (valueA > valueB) {
            return sortCoeff;
        }
        if (valueA < valueB) {
            return -sortCoeff;
        }
        if (valueA === valueB) {
            return 0;
        }
    });
};
