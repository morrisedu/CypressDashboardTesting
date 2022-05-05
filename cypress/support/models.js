import {modelS_URL} from "./authentication.constant";


let data = require("../fixtures/ModelSPage.json")

export class ModelS {
    urlVerification() {
        cy.wait(500)
        cy.contains("Model S").click()
        cy.url().should("eq", modelS_URL)
    }

    privacyVerification() {
        cy.scrollTo("bottomLeft")

        cy.get("[class = 'tds-link tcl-link']").each(($el, index) => {
            const txt = $el.text()

            expect(txt).to.contain(data.ModelS[index])
        })
    }
}

export const onModelSPage = new ModelS