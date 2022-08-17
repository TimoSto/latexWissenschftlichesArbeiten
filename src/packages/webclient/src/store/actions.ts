import { ActionTree, ActionContext } from 'vuex';
import { State } from './state';
import { Mutations } from './mutations';
import { ActionTypes } from "@/store/action-types";
import {MutationTypes} from "@/store/mutation-types";

export type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
    [ActionTypes.GET_PROJECTS](
        { commit }: AugmentedActionContext,
        payload: undefined
    ): Promise<void>;
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.GET_PROJECTS]({ commit }, payload) {
        // const sessionID = await loginUser(payload.username, payload.password, payload.rememberMe);
        // commit(MutationTypes.SET_SESSION, { id: sessionID, username: payload.username });
        const resp = await fetch('/getProjects');

        if( !resp.ok ) {
            return
        }

        const obj = await resp.json();

        commit(MutationTypes.SET_PROJECTS, obj)
    },
};