describe('Device Test', () => {
    it('720p', () => {
        cy.viewport(1280, 720)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })

    it('1080p', () => {
        cy.viewport(1080, 1080)
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })

    it('iPhoneX', () => {
        cy.viewport('iphone-xr')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })

    it('iPad Mini', () => {
        cy.viewport('ipad-mini')
        cy.visit('http://www.example.com')
        cy.wait(3000)
    })

})