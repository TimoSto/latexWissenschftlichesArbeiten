/// <reference types="cypress" />

import {VisitUrl} from "../../helpers/Browser";
import * as AppAssertions from "../../helpers/AppAssertions.js";
import * as AppActions from "../../helpers/AppActions.js";
import * as ProjectActions from "../../helpers/ProjectsPageActions.js"

describe('deleting project', () => {
    describe('deleting second', () => {
        before(() => {
            VisitUrl('#/projects');
        });

        it('deleting second', () => {
            AppActions.ClickSidebarItem(1);
            ProjectActions.ClickOnProjectDelete();
            AppActions.ClickInDialog('.v-btn', 1)
            AppAssertions.AssertUrlHashIs('#/projects')
            AppAssertions.AssertSidebarHasItems(1);
        })

        it('deleting first', () => {
            AppActions.ClickSidebarItem(0);
            ProjectActions.ClickOnProjectDelete();
            AppActions.ClickInDialog('.v-btn', 1)
            AppAssertions.AssertUrlHashIs('#/projects')
            AppAssertions.AssertSidebarHasItems(0);
        })
    })
})
