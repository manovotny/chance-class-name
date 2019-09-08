const Chance = require('chance');

const className = require('./index');

describe('index.js', () => {
    const chance = new Chance();

    beforeEach(() => {
        chance.mixin({
            className
        });
    });

    for (let i = 0; i < 100; i++) {
        test('should begin with an underscore, a hyphen, or a letter, followed by any number of hyphens, underscores, letters, or numbers', () => {
            const result = chance.className();
            const regex = new RegExp(/^[-_a-zA-Z]{1}[-_a-zA-Z0-9]*$/u, 'gu');

            expect(regex.test(result)).toBe(true);
        });
    }
});
