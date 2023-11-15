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