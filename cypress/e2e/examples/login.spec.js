// const config = require('../fixtures/example.json')

describe('Working with inputs', () =>{
    it('should override the current time', () => {
        const date = new Date(2021, 9, 11).getTime() // return a timestamp
        cy.clock(date)
        cy.log(date)
    })
    
    it('Should load login page', () =>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({ log: true})
        cy.clearLocalStorage('your item', {log: true})
        cy.title().should('include', 'Zero - Log in')
    })

    it('should full user name', () =>{
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('some Invalid Name' , { delay: 50 })
    })

    it('should fill password', () => {
        cy.get('#user_password').as('passowrd')
        cy.get('@passowrd').clear()
        cy.get('@passowrd').type('some Invalid passowrd' , { delay: 50 })
    })

    it('should mark checkbox', () => {
        cy.get('input[type="checkbox"]').click()
    })

    it('should submit login form', () => {
        cy.contains('Sign in').click()
    })

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })
})