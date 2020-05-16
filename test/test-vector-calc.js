const assert = require('assert');
const VectorCalculator = require('../app/VectorCalculator');

//Pruebas de operaciones con vectores
describe('VectorCalc', () =>{
    describe('#sum', () => {
        let v1={x:4, y:3};
        let v2={x:1, y:3};

        it('Deberia sumar los vectores', () => {
            assert.deepEqual({x:5, y:6}, VectorCalculator.sum(v1, v2));
        })
    })

    describe('#sub', () =>{
        let v1={x:4, y:3};
        let v2={x:1, y:3};

        it('Deberia restar los vectores', () => {
            assert.deepEqual({x:3, y:0}, VectorCalculator.sub(v1, v2));
        })
    })

    describe('#scalar', () =>{
        let v1={x:4, y:3};
        let s = 2;

        it('Deberia escalar el vector', () => {
            assert.deepEqual({x:8, y:6}, VectorCalculator.scalar(v1, s));
        })
    })

    describe('#dot', () =>{
        let v1={x:4, y:3};
        let v2={x:1, y:3};

        it('Deberia hacer el producto punto de los vecotres', () => {
            assert.equal(13, VectorCalculator.dot(v1, v2));
        })
    })

})