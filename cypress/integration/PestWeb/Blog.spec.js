describe('Blog Basic', () => {
    it(`should display the blog landing page`, ()=>{
        cy.visit(`https://www.pestweb.com/blog`);
    });
});
  
describe('Blog Post Content', () => {
    it(`should show a blog post`, ()=>{
        cy.visit(`https://pestweb.loc/blog/a6150/A-Patented-Solution-to-Rodent-Control-Selontra-Rodent-Bait`);
        cy.contains(`A Patented Solution to Rodent Control: Selontra® Rodent Bait`);
        cy.contains(`In movies and cartoons, rats and mice are often depicted as adorable characters. In reality, they are harmful pes`);
    })
});