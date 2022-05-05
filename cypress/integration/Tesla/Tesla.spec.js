import {tesla_URL} from "../../support/authentication.constant";
import {onModelSPage} from "../../support/models";


describe("tesla.com page testing", () => {

    beforeEach("Navigate to tesla.com", () => {
        cy.visit(tesla_URL)
    })


    it("Links verification", () => {
        onModelSPage.urlVerification()
        onModelSPage.privacyVerification()
    })
})

/*
    navigate to https://www.tesla.com/models/
    Click compare
    Check every single text on the page.
 */