import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import {MyState} from './state';
import {ProjectData} from "@/api/project/GetProjectData";
import {BibEntry} from "@/api/bibEntry/BibEntry";
import {BibType, CreateField} from "@/api/bibType/BibType";
import {GenerateModelForBibType} from "@/api/bibType/GenerateModelForBibTypes";
import Vue from "vue";

export type Mutations<S = MyState> = {
    [MutationTypes.APP_SET_PROJECTNAMES](state: S, payload: string[]): void;
};

export const mutations: MutationTree<MyState> & Mutations = {
    [MutationTypes.APP_SET_PROJECTNAMES](state, payload: string[]) {
        state.app.projectNames = payload
    },
    [MutationTypes.APP_SET_PROJECTNAME](state, payload: string) {
        state.app.currentProjectName = payload
    },
    [MutationTypes.APP_SET_ERROR](state, payload: {type: string, message: string}) {
        state.app.error = payload
    },
    [MutationTypes.APP_TOGGLE_TWO_THIRDS](state) {
        state.app.twoThirdsActive = !state.app.twoThirdsActive;
    },
    [MutationTypes.APP_SET_SUCCESS](state, payload: string) {
        state.app.successMessage = payload
        if( payload === 'SUCCESS_PROJECT_DELETED' ) {
            state.app.deletedProject = state.app.currentProjectName
        }
    },
    [MutationTypes.PROJECT_SET_BACKUP_PATHS](state, payload: string[]) {
        state.project.backupPaths = payload
    },
    [MutationTypes.PROJECT_SET_PROJECT_DATA](state, payload: ProjectData) {
        state.project.bibEntries = payload.BibEntries
        state.project.bibTypes = payload.BibTypes
        state.project.bibTypes.forEach(t => {
            if( !t.CitaviNecessaryFields ) {
                t.CitaviNecessaryFields = [];
            }
        })
    },
    [MutationTypes.EDITOR_OPEN](state, payload: {Type: string, Key: string}) {
        state.editor.type = payload.Type;
        state.editor.key = payload.Key;
        if( payload.Type === 'bibType' ) {
            state.editor.entryToEdit = <BibEntry>{};
            for( let i = 0; i < state.project.bibTypes.length ; i++ ) {
                if( state.project.bibTypes[i].Name === payload.Key ) {
                    state.editor.typeToEdit = JSON.parse(JSON.stringify(state.project.bibTypes[i]));
                    break;
                }
            }
        } else if( payload.Type === 'bibEntry' ) {
            state.editor.typeToEdit = <BibType>{};
            for( let i = 0; i < state.project.bibEntries.length ; i++ ) {
                if( state.project.bibEntries[i].Key === payload.Key ) {
                    state.editor.entryToEdit = JSON.parse(JSON.stringify(state.project.bibEntries[i]));
                    break;
                }
            }
        }
    },
    [MutationTypes.EDITOR_TYPE_ADD_FIELD](state, payload: boolean) {
        if( payload ) {
            state.editor.typeToEdit.CiteFields.push(CreateField('', 'normal', '', ''))
        } else {
            state.editor.typeToEdit.Fields.push(CreateField('', 'normal', '', ''))
        }
    },
    [MutationTypes.EDITOR_TYPE_RM_FIELD](state, payload: {cite: boolean, index: number}) {
        if( payload.cite ) {
            state.editor.typeToEdit.CiteFields.splice(payload.index, 1)
        } else {
            state.editor.typeToEdit.Fields.splice(payload.index, 1)
        }
    },
    [MutationTypes.EDITOR_TYPE_UPDATE_MODELS](state) {
        state.editor.typeToEdit.Model = GenerateModelForBibType(state.editor.typeToEdit.Fields);
        state.editor.typeToEdit.CiteModel = GenerateModelForBibType(state.editor.typeToEdit.CiteFields);
    },
    [MutationTypes.PROJECT_UPDATE_TYPE_TO_EDIT](state) {
        for( let i = 0 ; i < state.project.bibTypes.length ; i++ ) {
            if( state.project.bibTypes[i].Name === state.editor.key ) {//TODO: wie gescheit reaktiv
                Vue.set(state.editor, 'key', state.editor.typeToEdit.Name);
                Vue.set(state.project.bibTypes[i], 'Name', state.editor.typeToEdit.Name);
                Vue.set(state.project.bibTypes[i], 'Fields', state.editor.typeToEdit.Fields);
                // state.project.bibTypes[i].CiteFields = state.editor.typeToEdit.CiteFields;
                // state.project.bibTypes[i].CitaviNecessaryFields = state.editor.typeToEdit.CitaviNecessaryFields;
                // state.project.bibTypes[i].Model = state.editor.typeToEdit.Model;
                // state.project.bibTypes[i].CiteModel = state.editor.typeToEdit.CiteModel;

                console.log(state.project.bibTypes[i])
            }
        }
    }
};