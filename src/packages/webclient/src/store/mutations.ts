import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { State } from './state';
import {BibType} from "@/api/bibTypes/BibType";
import {BibEntry} from "@/api/bibEntries/BibEntry";
import router from "@/router";
import {GenerateModelForBibType} from "@/api/bibTypes/GenerateModelForBibTypes";
export type Mutations<S = State> = {
    [MutationTypes.SET_PROJECT](state: S, payload: string): void;
    [MutationTypes.SET_PROJECTS](state: S, payload: string[]): void;
};

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.SET_PROJECT](state, payload: string) {
        state.project = payload
    },
    [MutationTypes.SET_PROJECTS](state, payload: string[]) {
        state.projects = payload
    },
    [MutationTypes.SET_BIBTYPES](state, payload: BibType[]) {
        state.bibTypes = payload
    },
    [MutationTypes.SET_BIBENTRIES](state, payload: BibEntry[]) {
        state.bibEntries = payload
    },
    [MutationTypes.UPDATE_MODEL_FOR_TYPE](state, payload: string) {
        state.bibTypes.forEach((bType, i) => {
            if( bType.Name === payload ) {
                state.bibTypes[i].Model = GenerateModelForBibType(bType);
            }
        })
    },
};