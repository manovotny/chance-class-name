const firstCharacterPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
const remainingCharacterPool = `${firstCharacterPool}0123456789`;

module.exports = () => {
    const length = chance.natural({ // eslint-disable-line no-undef
        max: 25,
        min: 1
    });
    const firstCharacter = chance.character({pool: firstCharacterPool}); // eslint-disable-line no-undef

    if (length === 1) {
        return firstCharacter;
    }

    return firstCharacter + chance.string({ // eslint-disable-line no-undef
        length: length - 1,
        pool: remainingCharacterPool
    });
};
