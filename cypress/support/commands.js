
Cypress.Commands.add('linkClick', (link) => {
    link.scrollIntoView( {top: 1000, left: 0} )
        .realMouseMove(0, 1000)
        .click()
})

Cypress.Commands.add('openAndGetAllDropItems', (dropNum) => {
    cy.get('header li')
        .eq(dropNum)
        .find('[tabindex]')
        .realHover()        
        .siblings('div')
        .find('a')
})

Cypress.Commands.add('getHeadeDropdown', (dropNum) => {
    cy.get('header li')
        .eq(dropNum)
        .find('[tabindex]')
})

Cypress.Commands.add('acceptAllCookies', () => {
    cy.get('[id="__next"]', { timeout: 60000 }).then(($btn) => {
        if ($btn.find('[aria-label="close and deny"]').is(':visible')) {
          cy.contains('Accept and close')
            .click()                                       
        }
      })
})

Cypress.Commands.add('moveFromHeader', () => {
    cy.get('header')
        .realMouseMove(0, 1500)
})

Cypress.Commands.add('getURL', () => {
    cy.url({ timeout: 120000})
})