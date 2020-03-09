const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', function () {
    describe('when receives an entity and an action and is a create', function () {
        it('should return the respective message with create', function () {
            const result = buildMessage('movie', 'create');
            const expect = 'movie created';
            assert.strictEqual(result, expect);
        });
    });

    describe('when receives an entity and an action and is a list', function () {
        it('should return the respective message with the entity in plural', function () {
            const result = buildMessage('movie', 'list');
            const expected = 'movies listed';
            assert.strictEqual(result, expected);
        });
    });

    describe('when receives an entity and an action and is an update', function () {
        it('should return the respective message with updated', function () {
            const result = buildMessage('movie', 'create');
            const expected = 'movie created';
            assert.strictEqual(result, expected);
        });
    });

    describe('when receives an entity and an action and is a delete', function () {
        it('should return the respective message with delete', function () {
            const result = buildMessage('movie', 'delete');
            const expected = 'movie deleted';
            assert.strictEqual(result, expected);
        });
    });
});
