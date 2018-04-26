let fns = require('../../utils/functions');

describe('Get hours/minutes Methods:', ()=>{

    test('getHours("16:00:00") should return the hours from argument', ()=>{
        expect (fns.getHours('16:00:00')).toEqual(16)

    })
    test('getHours("06:16:00") should return the hours from argument', ()=>{
        expect (fns.getHours('06:16:00')).toEqual(6)

    })
    test('getHours("00:00:00") should return the hours from argument', ()=>{
        expect (fns.getHours('00:00:00')).toEqual(0)

    })

    test('getMinutes("16:00:00") should return the minutes from argument', ()=>{
        expect (fns.getMinutes('16:00:00')).toEqual(0)

    })
    test('getMinutes("16:16:00") should return the minutes from argument', ()=>{
        expect (fns.getMinutes('12:16:00')).toEqual(16)

    })
    
})

let testDate = new Date (2018,3,10)

test('changeToString(testDate)', ()=>{
    expect (fns.changeToString(testDate)).toBe('Tue Apr 10 2018 00:00:00 GMT-0600 (Mountain Daylight Time)')
})