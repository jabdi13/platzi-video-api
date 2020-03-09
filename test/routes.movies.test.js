const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', function () {
    const route = proxyquire('../routes/movies', {
       '../services/movies': MoviesServiceMock
    });

    const request = testServer(route);

    describe('GET /movies', function () {
        it('should respond with status 200', function (done) {
            request.get('/api/movies').expect(200, done);
        });

        it('should respond with the list of movies', function (done) {
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    message: 'movies listed'
                });

                done();
            });
        });
    });
    describe('GET /movies/:movieId', function () {
        const movieId = '5e62ed0afc13ae0eae000009';
        it('should respond with status 200', function (done) {
            request.get(`/api/movies/${movieId}`).expect(200, done);
        });

        it('should respond with one movie object', function (done) {
            request.get(`/api/movies/${movieId}`).end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock[0],
                    message: 'movie retrieved'
                });

                done();
            });
        });
    });

    describe('POST /movies', function () {
        it('should respond with status 201', function (done) {
            request.post('/api/movies').expect(201, done);
        });

        it('should respond with created movie id', function (done) {
            request.post('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock[0].id,
                    message: 'movie created'
                });

                done();
            });
        });
    });

    describe('PUT /movies/:movieId', function () {
        const movieId = '5e62ed0afc13ae0eae000009';
        it('should respond with status 200', function (done) {
            request.put(`/api/movies/${movieId}`).expect(200, done);
        });

        it('should respond with updated movie id', function (done) {
            request.put(`/api/movies/${movieId}`).end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock[0].id,
                    message: 'movie updated'
                });

                done();
            });
        });
    });

    describe('DELETE /movies/:movieId', function () {
        const movieId = '5e62ed0afc13ae0eae000009';
        it('should respond with status 200', function (done) {
            request.delete(`/api/movies/${movieId}`).expect(200, done);
        });

        it('should respond with deleted movie id', function (done) {
            request.delete(`/api/movies/${movieId}`).end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock[0].id,
                    message: 'movie deleted'
                });

                done();
            });
        });
    });
});
