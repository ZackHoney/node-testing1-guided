const Car = require('./car')

function foo() {
    return 'the foo'
}

// Test away!
describe('our first test', () => {
    test('sanity', () => {
        expect(5).toBe(5)
    })
    test('objects', () => {
        const o = { a: 1 }
        const oo = { a: 1 }
        const ooo = oo
        expect(o).toBe(o)
        expect(oo).toBe(ooo)
    })
    test('objects again', () => {
        expect({ a: 1 }).toEqual({ a: 1 })
    })
})
describe('foo function', () => {
    test('foo returns the foo', () => {
        expect(foo()).toBe('the foo')
    })
})
describe('Car class', () => {
    let prius
    beforeEach(() => {
        prius = new Car('toyota', 'prius')
    })
    test('it is defined', () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function)
    })
    test('has model and make', () => {
        expect(prius).toHaveProperty('make')
        expect(prius).toHaveProperty('model')
        expect(prius.make).toBeDefined()
        expect(prius.model).toBeDefined()
    })
    test('new cars start with the odometer at zero', () => {
        expect(prius).toHaveProperty('odometer', 0)
    })
    test('cars have a drive method', () => {
        expect(prius.drive).toBeDefined()
        expect(prius.drive).toBe(Car.prototype.drive)
    })
    test('drive method takes distance and increases odometer by that distance', () => {
        prius.drive(10)
        expect(prius.odometer).toBe(10)
        prius.drive(5)
        expect(prius.odometer).toBe(15)
    })
    test('driveAsync method resolves the updated odometer', async () => {
        let updatedOdometer = await prius.driveAsync(7)
        expect(updatedOdometer).toBe(7)
        updatedOdometer = await prius.driveAsync(5)
        expect(updatedOdometer).toBe(12)
    })
})