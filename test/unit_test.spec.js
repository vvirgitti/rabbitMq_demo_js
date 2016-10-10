'use strict';

const request = require('supertest');
const expect = require('chai').expect;

const app = require ('./../app');


describe('GET / ', (done) => {

    it('can display Hello World', () => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello World')
            .end(done)
    });

});