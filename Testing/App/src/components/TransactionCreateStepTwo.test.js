import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"



// workflow: Arrange (rendering the component) > Act (user-event fire like click, input text) > Assert (make the assertion)

/*
test('on initial render the pay button is disabled', async () => {
    render(<TransactionCreateStepTwo sender={{ id: '5' }} receiver={{ id: '5' }} />)
    // screen.debug();
    // screen.getByRole('')

    // expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled()
    expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled()
})

test('if amount and note is entered, the pay button is enabled', async () => {
    render(<TransactionCreateStepTwo sender={{ id: '5' }} receiver={{ id: '5' }} />)
    // expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled()
    // https://testing-library.com/docs/ecosystem-user-event
    userEvent.type(screen.getByPlaceholderText(/Amount/i), '50')
    userEvent.type(screen.getByPlaceholderText(/Add a note/i), 'dinner')

    // screen.getByRole('');
    // expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled()
    expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled()
})

*/

// Integration Test

test('Integration Test User Flow', async () => {
    render(<TransactionCreateStepTwo sender={{ id: '5' }} receiver={{ id: '5' }} />)
    expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled()

    userEvent.type(screen.getByPlaceholderText(/Amount/i), '50')
    userEvent.type(screen.getByPlaceholderText(/Add a note/i), 'dinner')

    expect(await screen.findByRole('button', { name: /pay/i })).toBeEnabled()
})

