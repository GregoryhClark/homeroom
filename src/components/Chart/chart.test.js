const anything = require('./Chart');

//jest.dontMock('./Chart');

// describe('Chart Methods:', ()=>{
//     test('selectCourse() should set state to have selectedCourseName equal to argument')
//     console.log('hey')
//     Chart.selectCourse('test_name');

//     expect (Chart.selectCourse).toBe('test_name')
// })

describe('Tesest Methods:', ()=>{
    testTesting('testTesting() should set state to have selectedCourseName equal to argument')
    
    let result = anything.testMethod(2,4);

    expect (anything.testMethod).toBe(result)
})