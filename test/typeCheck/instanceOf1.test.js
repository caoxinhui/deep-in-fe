/* eslint-disable camelcase */
const assert = require('assert');
const instance_of = require('../../src/typeCheck/instanceOf1');

describe('#testInstanceOf1', () => {
    class Father {}
    class Son extends Father {}
    const son = new Son();

    it('#son-is-instance-of-Son', () => {
        assert(instance_of(son, Son));
    });

    it('#son-is-instance-of-Father', () => {
        assert(instance_of(son, Father));
    });
});
