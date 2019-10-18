describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('PestwebTV', () => {

    it('should load pestweb tv', ()=>{
        cy.visit('https://www.pestweb.loc/tv');

        cy.get('h1').should('contain', 'ProCenter TV Slides');
    });
    it('should load the austin tv slides', ()=>{

        //TODO: Jank
        let today = new Date();
        let day = ("0" + today.getDate()).slice(-2);
        let month = ("0" + (today.getMonth() + 1)).slice(-2);
        let year = today.getFullYear();
        let dateString = `${year}-${month}-${day}`;

        cy.server();
        cy.visit(`https://www.pestweb.loc/tv/HQ`)
            .location('pathname', { timeout: 10000 })
            .should('eq', `/tv/HQ/${dateString}`);        

        //https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
        cy.get('[id^=slideshow-slide]').should('have.length.above', 1)

        cy.get('[id^=slideshow-slide]').should('be.visible');
    });

    it('should be lean enough to run on a google tv', ()=>{
      cy.server();
      cy.visit(`https://www.pestweb.loc/tv/HQ`)
          .location('pathname', { timeout: 10000 });    

      expect(window.performance.memory.usedJSHeapSize).to.be.below(50000000);
    })
})