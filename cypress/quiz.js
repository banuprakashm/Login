/// <reference types = "Cypress"/>
describe('Locating elements',()=>{
  it('Verify the home page button', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/quiz2/index.html')
    cy.get('#play').click()
    cy.wait(2000)
    cy.get('#progressText').contains(10)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.visit('https://distracted-bassi-cd1892.netlify.app/quiz2/end.html')
    cy.wait(2000)
    cy.get('#saveScoreBtn').should('be.disabled')

    cy.get('#username').type('Hello, World')
    cy.get('#saveScoreBtn').click()
    cy.wait(1000)
    cy.get('#highScores').click()
    cy.wait(1000)
    cy.get('.container').contains('Hello, World')
    cy.get('#goHome').click()
    cy.wait(1000)
  });
  it('Verify the play again button', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/quiz2/index.html')
    cy.get('#play').click()
    cy.wait(2000)
    cy.get('#progressText').contains(10)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.visit('https://distracted-bassi-cd1892.netlify.app/quiz2/end.html')
    cy.wait(2000)
    cy.get('#playAgain').click()
    cy.wait(1000)
    cy.get('#progressText').contains(10)
    cy.wait(1000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.get('.choice-text').first().click()
    cy.wait(2000)
    cy.visit('https://distracted-bassi-cd1892.netlify.app/quiz2/end.html')
    cy.wait(2000)
    cy.get('.container').contains('Go Home')
    cy.get('#goHome').click()
  });

  it("Responsive in Home Page", () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/quiz2/index.html')
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

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport("ipad-2", "portrait");
    cy.wait(200);
    cy.viewport("iphone-4", "landscape");
    cy.wait(200);

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
  });
  it("Responsive in Game Page", () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/quiz2/game.html')
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

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport("ipad-2", "portrait");
    cy.wait(200);
    cy.viewport("iphone-4", "landscape");
    cy.wait(200);

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
  });
  it("Responsive in Highscore Page", () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/quiz2/highscores.html')
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

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport("ipad-2", "portrait");
    cy.wait(200);
    cy.viewport("iphone-4", "landscape");
    cy.wait(200);

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.json)
  });
  it("Responsive in End Page", () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/quiz2/end.html')
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

