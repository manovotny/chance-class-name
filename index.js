const Chance = require('chance');

const chance = new Chance();
const firstCharacterPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
const remainingCharacterPool = `${firstCharacterPool}0123456789`;

module.exports = () => {
    const length = chance.natural({
        max: 25,
        min: 1
    });
    const firstCharacter = chance.character({pool: firstCharacterPool});

    if (length === 1) {
        return firstCharacter;
    }

    return (
        firstCharacter +
        chance.string({
            length: length - 1,
            pool: remainingCharacterPool
        })
    );
};
