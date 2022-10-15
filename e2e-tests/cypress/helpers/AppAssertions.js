import {BaseURL} from "./Browser";

export function AssertTopAppBarHasText(text) {
    cy.get('header:first').find('.v-toolbar__title').should('have.text', text)
}

export function AssertNavIconIsDisabled() {
    cy.get('.v-app-bar__nav-icon').should('be.disabled')
}

export function AssertNavIconIsNotDisabled() {
    cy.get('.v-app-bar__nav-icon').should('not.be.disabled')
}

export function AssertSidebarClosed() {
    cy.get('.v-navigation-drawer').should('have.class', 'v-navigation-drawer--mini-variant')
}

export function AssertSidebarEmpty() {
    cy.get('.v-navigation-drawer__content').should('be.empty');
}

export function AssertSidebarNotEmpty() {
    cy.get('.v-navigation-drawer__content').should('not.be.empty');
}

export function AssertHomeBtnIsNotDisabled() {
    cy.get('header:first').find('.v-btn[title="Startseite"]').should('not.be.disabled')
}

export function AssertHomeBtnIsDisabled() {
    cy.get('header:first').find('.v-btn[title="Startseite"]').should('be.disabled')
}

export function AssertUrlHashIs(hash) {
    cy.url().then(url => {
        expect(url).to.eq(BaseURL + '/' + hash)
    })
}

export function AssertSidebarInfoBtnDisabled() {
    cy.get('nav').find('.v-bottom-navigation').find('button').should('be.disabled')
}

export function AssertSidebarInfoBtnNotDisabled() {
    cy.get('nav').find('.v-bottom-navigation').find('button').should('not.be.disabled')
}
