import { expect } from 'chai';
import { getFormattedDate } from '../utils.js';

describe('Date Formatting', () => {
    const testDate = new Date('2023-12-06T14:30:45Z');

    it('should return the correct date format', () => {
        const date = getFormattedDate(testDate);
        expect(date).to.equal('12/6/2023');  // Expected MM/DD/YYYY
    });

    it('should throw an error if the input is not a Date object', () => {
        expect(() => getFormattedDate("invalid")).to.throw("Invalid date");
    });
});
