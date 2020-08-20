/// <reference types = "Cypress"/>
describe('Locating elements',()=>{
  it('Verify the home page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#home').click()
    // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')
    // Thubmnail (Ex : Image)
    cy.get('.thumbnail')
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
  });

  it('Verify the world page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#world').click()
    // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')
    cy.get('.thumbnail')

    cy.get('.datecard')

    cy.get('.abstractcard')
    // Section Card Ex: US
    cy.get('.sectioncard')
    // Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    cy.get(".card")
    .first()
    .scrollIntoView()
  });

  it('Verify the magazine page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#magazine').click()
    // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')

    cy.get('.thumbnail')

    cy.get('.datecard')

    cy.get('.abstractcard')
    // Title Ex: US
    cy.get('.sectioncard')
// Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    cy.get(".card")
    .first()
    .scrollIntoView()
  });

  it('Verify the politics page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#politics').click()
    // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')

    cy.get('.thumbnail')

    cy.get('.datecard')

    cy.get('.abstractcard')
    // Title Ex: US
    cy.get('.sectioncard')
// Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    cy.get(".card")
    .first()
    .scrollIntoView()
  });

  it('Verify the technology page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#technology').click()
    // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')

    cy.get('.thumbnail')

    cy.get('.datecard')

    cy.get('.abstractcard')
    // Title Ex: US
    cy.get('.sectioncard')
// Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    cy.get(".card")
    .first()
    .scrollIntoView()
  });

  it('Verify the science page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#science').click()
    // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')

    cy.get('.thumbnail')
    
    cy.get('.datecard')

    cy.get('.abstractcard')
    // Title Ex: US
    cy.get('.sectioncard')
// Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    cy.get(".card")
    .first()
    .scrollIntoView()
  });

  it('Verify the health page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#health').click()
    // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')

    cy.get('.thumbnail')

    cy.get('.datecard')

    cy.get('.abstractcard')
    // Title Ex: US
    cy.get('.sectioncard')
// Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    cy.get(".card")
    .first()
    .scrollIntoView()
  });

  it('Verify the sports page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#sports').click()
    // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')

    cy.get('.thumbnail')

    cy.get('.datecard')

    cy.get('.abstractcard')
    // Title Ex: US
    cy.get('.sectioncard')
// Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    cy.get(".card")
    .first()
    .scrollIntoView()
  });

  it('Verify the arts page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#arts').click()
    // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')

    cy.get('.thumbnail')

    cy.get('.datecard')

    cy.get('.abstractcard')
    // Title Ex: US
    cy.get('.sectioncard')
// Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    cy.get(".card")
    .first()
    .scrollIntoView()
  });

  it('Verify the fashion page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#fashion').click()
    // // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')

    cy.get('.thumbnail')

    cy.get('.datecard')

    cy.get('.abstractcard')
    // Title Ex: US
    cy.get('.sectioncard')
// Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    cy.get(".card")
    .first()
    .scrollIntoView()
  });

  it('Verify the food page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#food').click()
    cy.wait(1000)
    // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')

    cy.get('.thumbnail')

    cy.get('.datecard')

    cy.get('.abstractcard')
    // Title Ex: US
    cy.get('.sectioncard')
// Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    cy.get(".card")
    .first()
    .scrollIntoView()
  });

  it('Verify the travel page', () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
    cy.wait(2000)
    cy.get('#food').click()
    // cy.get('img')
    // Continue Reading
    cy.get('.continueReading')

    cy.get('.thumbnail')

    cy.get('.datecard')

    cy.get('.abstractcard')
    // Title Ex: US
    cy.get('.sectioncard')
    // Title Card Ex : Democrats Nominate Harris for Vice President, as Obama Lashes
    cy.get('.titlecard')
    cy.get(".card")
    .first()
    .scrollIntoView()
  });

  it("Responsive in Home Page", () => {
    cy.visit('https://distracted-bassi-cd1892.netlify.app/newyork/')
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
    cy.viewport("samsung-s10").screenshot;
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
