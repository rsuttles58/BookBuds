describe("Front End Test", function() {
  it("Should Load Page", function() {
    cy.visit("https://sheltered-brook-97884.herokuapp.com/");
  });
  it("Should have a button", function() {
    cy.get(".btn").contains("Book Survey").click();
  });
  it("When User Clicks It Should Take You To Survey", function(){
    cy.url().should('include', '/survey')
  })
  
});
