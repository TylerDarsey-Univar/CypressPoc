let routes = [
  "",
  "grow",
  "about",
  "contact",
  "offline",
  "termsOfSale", 
  "people",
  "purchase",
  "join",
  //"rewards",
]

describe('PestWeb Works on Large Desktop Devices', () => {
  routes.forEach((route) => {
    it(`should return without error: ${route}`, ()=>{
      cy.viewport(1920, 1080)
      cy.visit(`https://www.pestweb.com/${route}`);
    });
  })
});

describe('PestWeb Works on Desktop Devices', () => {
  routes.forEach((route) => {
    it(`should return without error: ${route}`, ()=>{
      cy.viewport(1000, 660)
      cy.visit(`https://www.pestweb.com/${route}`);
    });
  })
});

describe('PestWeb Works on Small Devices', () => {
  routes.forEach((route) => {
    it(`should return without error: ${route}`, ()=>{
      cy.viewport(800, 600)
      cy.visit(`https://www.pestweb.com/${route}`);
    });
  })
});

describe('PestWeb Works on ExtraSmall Devices', () => {
  routes.forEach((route) => {
    it(`should return without error: ${route}`, ()=>{
      cy.viewport(600, 400)
      cy.visit(`https://www.pestweb.com/${route}`);
    });
  })
});