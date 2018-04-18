const anything = require('./Chart');


// describe('Chart Methods:', ()=>{
//     test('selectCourse() should set state to have selectedCourseName equal to argument')
//     console.log('hey')
//     Chart.selectCourse('test_name');

//     expect (Chart.selectCourse).toBe('test_name')
// })

describe('Tesest Methods:', ()=>{
    test('test() should set state to have selectedCourseName equal to argument')
    console.log('hey')
    let result = anything.testMethod(2,4);

    expect (anything.testMethod).toBe(result)
})