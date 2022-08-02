describe("Newslatter Subsribe Form", ()=>{
    beforeEach(()=>{
        cy.visit("/")
    })

    it('Allow users to subscribe to the email list', () => {
        const email = "ziom@ziom.pl"
        cy.getByData("email-input").type(email)
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains(email)
    });

    it('Doesnt allow an invalid email adress', () => {
        const invalidEmail = "invalidEmail"
        cy.getByData("email-input").type(invalidEmail)
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    });
})