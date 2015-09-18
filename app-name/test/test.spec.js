describe('Person', function () {

    var Person;
    beforeEach(module('appName'));
    beforeEach(inject(function (_Person_) {
        Person = _Person_;
    }));

    describe('Constructor', function () {

        it('assigns a name', function () {
            expect(new Person('Ben')).to.have.property('name', 'Ben');
        });

    });
});