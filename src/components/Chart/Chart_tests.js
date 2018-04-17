const Chart = require('./Chart');


describe('Chart Methods:', ()=>{
    test('selectCourse() should set state to have selectedCourseName equal to argument')
    Chart.selectCourse('test_name');

    expect (Chart.this.state.selectCourse).toBe('test_name')
})