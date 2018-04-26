describe('testing ability to log in as Billy', () => {

    it('Should be able to log in', () => {
        cy.visit('localhost:3000')

        cy.get('input[type=text]').type('stud')
        cy.get('input[type=password]').type('stud')
        cy.get('button').contains('LOG IN')
            .click()
        cy.wait(2000)
        cy.url().should('include', '/home')

    })


})

describe('testing Nav bar', ()=>{

    it('should be able to navigate to dashboard ', ()=>{
        cy.get('a').contains('Dashboard').click()
        cy.url().should('include', '/dashboard')

    })
    it('should be able to navigate to calendar ', ()=>{
        cy.get('a').contains('Calendar').click()
        cy.url().should('include', '/calendar')

    })
    it('should be able to navigate to my Account ', ()=>{
        cy.get('a').contains('My Account').click()
        cy.url().should('include', '/account')

    })
    it('should be able to navigate to Courses ', ()=>{
        cy.get('a').contains('Courses').click()
        cy.get('a').contains('US History').click()
        cy.url().should('include', '/courses')

    })
    it('should be able to click on "assignments"',()=>{
        cy.get('a').contains('View Assignments').click()
        cy.url().should('include', '/assignments')
    })
    it('should be able to click on "Course Home"',()=>{
        cy.get('a').contains('Course Home').click()
        cy.url().should('include', '/courses')
    })

    it('should be able to click on "Home"',()=>{
        cy.get('a').contains('Home').click()
        cy.url().should('eq','http://localhost:3000/home')
    })
    it('should be able to click on "Logout"',()=>{
        cy.get('a').contains('Logout').click()
        cy.wait(2000)
        cy.url().should('eq','http://localhost:3000/')
    })
})

describe('testing rendering and functionality', () => {

    it('Should Log in', () => {
        cy.visit('localhost:3000')

        cy.get('input[type=text]').type('stud')
        cy.get('input[type=password]').type('stud')
        cy.get('button').contains('LOG IN')
            .click()
        cy.url().should('include', '/home')

    })
    it('Should display Billys Name', () => {
        cy.get('li').contains('Billy').should('exist')
    })

    it('Should find US History Button', () => {
        cy.get('#course_button0').should('contain', 'US History')
    })


}) 
// describe('Should be able to update account info', () => {

//     it('should be able to update name ', () => {
//         cy.get('a').contains('My Account').click()
//         cy.get('input[value]').first().clear().type('Will')
//         cy.get('button').contains('Save').click();
//         // cy.pause()
//         // cy.get('a').contains('Home').click();
//         // cy.get('a').contains('My Account').click();
//         // cy.get('input[value]').first().should('have.value', 'Will')

//     })

// })






