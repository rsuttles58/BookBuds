describe("Survey Page Navigation", function(){
    it("Should Load Page", function() {
        cy.visit("https://sheltered-brook-97884.herokuapp.com/survey");
      });

    it("When Available BookBuds is clicked, should navigate to page with buds.", function(){
        cy.visit("https://sheltered-brook-97884.herokuapp.com/survey")
        cy.contains("Available BookBuds").click()
        cy.url().should('include', '/api/friends')
    })
})