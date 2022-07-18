let myFunctions = require('./functions')

test('The function should return 2', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('The function should return unique names', () => {
    expect(myFunctions.greeting('James')).toBe('Hello James.')
})

test('The function should return unique names', () => {
    expect(myFunctions.greeting('Jill')).toBe('Hello Jill.')
})

test('Add Test', () => {
    expect(myFunctions.add(2, 3)).toBe(5)
})


