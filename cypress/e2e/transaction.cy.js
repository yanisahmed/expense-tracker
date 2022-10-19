describe('transaction', () => {
    it('user can add transaction where type income', () => {
        // check whether website is accessible or not
        cy.visit('/');

        cy.findByRole('textbox').type('monthly gift');
        cy.findByRole('spinbutton').type('20000');
        cy.get('[type="radio"]').first().check();
        cy.findByRole('button', { name: /add transaction/i}).click();

        
    });

    it('user can add transaction where type expense', () => {
        // check whether website is accessible or not
        cy.visit('/');

        cy.findByRole('textbox').type('Purchase khata');
        cy.findByRole('spinbutton').type('200');
        cy.get('[type="radio"]').check();
        cy.findByRole('button', { name: /add transaction/i}).click();

        
    });
    it('user can add transaction where type expense', () => {
        // check whether website is accessible or not
        cy.visit('/');

        cy.findByRole('textbox').type('Purchase khata');
        cy.findByRole('spinbutton').type('200');
        cy.get('[type="radio"]').check();
        cy.findByRole('button', { name: /add transaction/i}).click();

        
    });

    it('user can visit view all page', () => {
        cy.visit('/transactions');
    })

    it('Back to home from trasaction page', () => {
        cy.findByRole('button', {
            name: /back to home/i
          }).click();
    })

    it('should allow me to edit an item', () => {
        // cy.get('.transList').eq(1).find('label').click()
        cy.get('.transList li .right .edit').eq(1).click();
        cy.findByRole('textbox').clear();
        cy.findByRole('textbox').type('updated text 2');
        cy.findByRole('button', {
            name: /update transaction/i
          }).click();
      })

      it('should allow me to cancel an update', () => {
        // cy.get('.transList').eq(1).find('label').click()
        cy.get('.transList li .right .edit').eq(1).click();
        cy.findByRole('button', {
            name: /cancel edit/i
          }).click();
      })

      it('should allow me to delete an item', () => {
        // cy.get('.transList').eq(1).find('label').click()
        cy.get('.transList li .right .delete').eq(1).click(); 
    })
})