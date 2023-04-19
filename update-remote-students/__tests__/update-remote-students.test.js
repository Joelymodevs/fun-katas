const updateRemoteStudents = require('../update-remote-students')

describe('updateRemoteStudents', () => {
    it('should add remote to a single object', () => {
        expect(updateRemoteStudents([{ name: 'Euler', age: 27 }])).toEqual([{ name: 'Euler', age: 27, location: 'remote' }])
    });
    it('should add remote to multiple objects and leave existing locations', () => {
        expect(updateRemoteStudents([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ])).toEqual([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]);
    });
    it('should return an empty arr if passed on', () => {
        expect(updateRemoteStudents([])).toEqual([]);
    });
    it('should update all students if non have location', () => {
        expect(updateRemoteStudents([
            { name: 'Hypatia', age: 31,},
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, }
          ])).toEqual([
            { name: 'Hypatia', age: 31, location: 'remote' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'remote' }
          ]);
    });
});