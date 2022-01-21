import { v4 as uuidv4 } from 'uuid';
describe('payment', () => {
    it('user can make payment', () => {
        // Login
        cy.visit('/')
        cy.findByRole('textbox', { name: /username/i }).type('johndoe')
        cy.findByLabelText(/password/i).type('s3cret')
        cy.findByRole('checkbox', { name: /remember me/i }).check()
        cy.findByRole('button', { name: /sign in/i }).click()
        // check account balance
        let oldBalance
        cy.get('[data-test="sidenav-user-balance"]').then(value => oldBalance = value.text()).then(oldb => console.log(oldb))
        // click on pay button
        cy.findByText(/new/i).click()
        // search for user
        cy.findByRole('textbox').type('deveo becker')
        cy.findByText(/devon becker/i).click()
        // add amount and note and click pay
        let paymentAmount = "5.00"
        cy.get('#amount').type(paymentAmount)
        let transactionDescription = uuidv4()
        cy.get('#transaction-create-description-input').type(transactionDescription)
        cy.get('[data-test="transaction-create-submit-payment"]').click()
        // return to transactions
        cy.get('[data-test="new-transaction-return-to-transactions"]').click().then(() => {
            cy.findByText(/mine/i).click().then(() => cy.findByText(transactionDescription).click({ force: true }))
        })
            .then(() => {
                cy.findByText(`-$${paymentAmount}`).should('be.visible')
                cy.findByText(transactionDescription).should('be.visible')
            })
        // go to personal payments
        // click on payments

        // cy.findByText(transactionDescription).click({ force: true })

        // verify if payment was mede successful
        // cy.findByText(paymentAmount).should('be.visible')
        // cy.findByText(transactionDescription).should('be.visible')
        // verify if payment amount was deducted
        cy.get('[data-test="sidenav-user-balance"]').then(value => {
            let convertOldBalance = parseFloat(oldBalance.replace(/\$|,/g, ''))
            let convertNewBalance = parseFloat(value.text().replace(/\$|,/g, ''))
            expect(convertOldBalance - convertNewBalance).to.equal(parseFloat(paymentAmount))
        })
    })
})