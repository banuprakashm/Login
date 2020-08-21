/// <reference types = "Cypress"/>
describe('Locating elements',()=>{
  it('Verify the home page', () => {
    cy.visit('http://distracted-bassi-cd1892.netlify.app/newyork')
    cy.wait(2000)
    cy.get('.container')
    cy.get('#home').click()
    cy.get('img')
    // Continue Reading
    cy.get('.continueReading')
    // Thubmnail (Ex : Image)
    cy.get('.img-thumbnail')
    // Date Card (Ex : August 19)
    cy.get('.datecard')
    // Abstract Card (Ex : Abstract of the news)
    cy.get('.abstractcard')
    // Section Card Ex: US
    cy.get('.sectioncard')
    // Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    // Verification of the card
    cy.get(".card")
    .first()
    .scrollIntoView()
    .screenshot(`First Card Screenshot-${Cypress.config().baseUrl}`);

    cy.get('.card')
    cy.get('.continueReading').contains('Continue reading')
    // Spelling Checker
    cy.get('#home').contains('HOME')
    cy.get('#world').contains('WORLD')
    .click()
    .get(".card")
    .first()
    .scrollIntoView()
    cy.get('#politics').contains('POLITICS')
    .click()
    .get(".card")
    .first()
    .scrollIntoView()
    cy.get('#magazine').contains('MAGAZINE')
    .click()
    .get(".card")
    .first()
    .scrollIntoView()
    cy.get('#technology').contains('TECHNOLOGY')
    .click()
    .get(".card")
    .first()
    .scrollIntoView()
    cy.get('#science').contains('SCIENCE')
    .click()
    .get(".card")
    .first()
    .scrollIntoView()
    cy.get('#health').contains('HEALTH')
    .click()
    .get(".card")
    .first()
    .scrollIntoView()
    cy.get('#sports').contains('SPORTS')
    .click()
    .get(".card")
    .first()
    .scrollIntoView()
    cy.get('#arts').contains('ARTS')
    .click()
    .get(".card")
    .first()
    .scrollIntoView()
    cy.get('#fashion').contains('FASHION')
    .click()
    .get(".card")
    .first()
    .scrollIntoView()
    cy.get('#food').contains('FOOD')
    .click()
    .get(".card")
    .first()
    .scrollIntoView()
    cy.get('#travel').contains('TRAVEL')
    .click()
    .get(".card")
    .first()
    .scrollIntoView()

    // a tag checker
    cy.get('a')
    .should('contain', 'Continue reading')
    .contains('Continue reading')
    .and('have.attr', 'href')            
    .and('not.include', '#')
  

  });

  it("Responsive in Home Page", () => {
    cy.visit('http://distracted-bassi-cd1892.netlify.app/newyork')
    cy.get(".container").should("be.visible");
    cy.viewport(320, 480);

    // the navbar should have collapse since our screen is smaller
    cy.get(".container").should("be.visible");
    cy.viewport(2999, 2999);

    // cy.viewport() accepts a set of preset sizes
    // to easily set the screen to a device's width and height

    // We added a cy.wait() between each viewport change so you can see
    // the change otherwise it is a little too fast to see :)

    cy.viewport("macbook-15");
    cy.wait(200);

    cy.viewport("macbook-13");
    cy.wait(200);
    cy.viewport("macbook-11");
    cy.wait(200);
    cy.viewport("ipad-2");
    cy.wait(200);
    cy.viewport("ipad-mini");
    cy.wait(200);
    cy.viewport("iphone-6+");
    cy.wait(200);
    cy.viewport("iphone-6");
    cy.wait(200);
    cy.viewport("iphone-5");
    cy.wait(200);
    cy.viewport("iphone-4");
    cy.wait(200);
    cy.viewport("iphone-3");
    cy.wait(200);
    cy.viewport("iphone-x");
    cy.wait(200);
    cy.viewport("iphone-xr");
    cy.wait(200);
    cy.viewport("samsung-note9");
    cy.wait(200);
    cy.viewport("samsung-s10")
    cy.wait(200);

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport("ipad-2", "portrait");
    cy.wait(200);
    cy.viewport("iphone-4", "landscape");
    cy.wait(200);

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
  });

  
})