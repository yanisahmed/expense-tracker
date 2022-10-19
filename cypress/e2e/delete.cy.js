import Balance from "../../src/components/Balance";
import React from 'react'
import { mount } from 'cypress/react18'


describe('Delete an iteam', () => {
    it('Mount the Transactio component', () => {
        cy.mount(<Balance />);
        
    })
})