<template>
  <NavArea
      :editor="editorOpen"
      :layout="twoThirdsMode ? 'two-thirds'
      : 'half-screen'"
      :pages="2"
      ref="navArea"
  >
    <template v-slot:page-1>
      <ProjectInfoPage v-if="currentProjectName === ''"/>
      <ProjectOverviewPage
          v-if="currentProjectName !== ''"
          v-on:openEditor="openEditor($event)"
          v-on:toTextEditor="toTextEditor"
      />
    </template>

    <template v-slot:page-2>
      <TexEditorPage v-on:navBack="navBack"/>
    </template>

    <template v-slot:edit-area>
      <EntryEditor
          v-if="editorType === 'entry'"
          v-on:closable="setClosable($event)"
          v-on:closeEditor="openEditor({Type: '', Element: -1})"
          v-on:toggleTwoThirds="toggleTwoThirds"
          :layoutBtnContent="layoutBtnContent"
          :index="editorElement"
      />
      <CategoryEditor
          v-if="editorType === 'category'"
          v-on:closable="setClosable($event)"
          v-on:closeEditor="openEditor({Type: '', Element: -1})"
          v-on:toggleTwoThirds="toggleTwoThirds"
          :layoutBtnContent="layoutBtnContent"
          :index="editorElement"
      />
    </template>
  </NavArea>
</template>

<script lang="ts">
import Vue from "vue";
import {i18nDictionary} from "../i18n/Keys";
import ProjectInfoPage from "./projectsPages/ProjectInfoPage.vue";
import NavArea, {NavAreaInterface} from "../components/NavArea.vue";
import ProjectOverviewPage from "./projectsPages/ProjectOverviewPage.vue";
import ActionTypes from "../store/ActionTypes";
import EntryEditor from "./projectsPages/EntryEditor.vue";
import CategoryEditor from "./projectsPages/CategoryEditor.vue";
import MutationTypes from "../store/MutationTypes";
import TexEditorPage from "./projectsPages/TexEditorPage.vue";

export interface EditorEvent {
  Type: string
  Element: number
}

export default Vue.extend({
  name: "ProjectsView",
  components: {TexEditorPage, CategoryEditor, EntryEditor, ProjectOverviewPage, NavArea, ProjectInfoPage},
  data() {
    return {
      i18nDictionary: i18nDictionary,
      twoThirdsMode: false,
      editorType: '',
      editorElement: -1,
    }
  },

  watch: {
    currentProjectName(nv) {
      if( nv && nv.length > 0 ) {
        this.$store.dispatch(ActionTypes.Projects.GetProjectData, nv);
        if( this.$route.path !== `/projects/${nv}` ) {
          this.$router.push(`/projects/${nv}`);
        }
      } else if( nv.length === 0 ) {
        if( this.$route.path !== '/projects' ) {
          this.$router.push('/projects');
        }
      }
      this.openEditor({Type: '', Element: -1});

    },
    editorCloseNeeded(v) {
      if(v) {
        this.openEditor({Type: '', Element: -1});
        this.$store.commit(MutationTypes.ProjectView.EditorCloseNeeded, false);
      }
    },
    editorIndexUpdate(v) {
      if( v > -1 ) {
        this.editorElement = v;
      }
    }
  },

  computed: {
    currentProjectName() {
      return this.$store.state.ProjectView.CurrentProject;
    },
    editorOpen() {
      return this.$data.editorType !== ''
    },
    layoutBtnContent() {
      if( this.$data.twoThirdsMode ) {
        return [
          '&#189;',
          this.$t(this.$data.i18nDictionary.App.Layout5050)
        ]
      }
      return [
        '&#8532;',
        this.$t(this.$data.i18nDictionary.App.Layout3070)
      ]
    },
    editorCloseNeeded(): boolean {
      return this.$store.state.ProjectView.EditorCloseNeeded;
    },
    editorIndexUpdate(): number {
      return this.$store.state.ProjectView.EditorIndexUpdate;
    },
    editorClosable: {
      get(): boolean {
        return !this.$store.state.Global.UnsavedChanged;
      },
      set(v: boolean) {
        this.$store.commit(MutationTypes.Global.SetUnsavedChanges, v);
      }
    }
  },
  methods: {
    openEditor(evt: EditorEvent) {
      if( this.editorClosable ) {
        this.editorElement = evt.Element;
        this.editorType = evt.Type;
      } else {
        this.$emit('unsafeCloseTriggered', () => {
          this.openEditor(evt);
        });
      }
    },
    toggleTwoThirds() {
      this.twoThirdsMode = !this.twoThirdsMode;
    },
    setClosable(v: boolean) {
      this.$store.commit(MutationTypes.Global.SetUnsavedChanges, !v)
    },
    toTextEditor() {
      (this.$refs.navArea as NavAreaInterface).toNext();
      this.openEditor({Type: '', Element: -1});
    },
    navBack() {
      (this.$refs.navArea as NavAreaInterface).toPrev();
    }
  },
})
</script>

<style scoped>

</style>