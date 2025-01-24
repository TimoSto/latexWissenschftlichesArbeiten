<template>
  <div>
    <v-container style="padding-top: 0; padding-bottom: 0">
      <div id="drop_zone" @dragover.prevent v-ripple @click="triggerFileSelect" @drop.prevent="readDroppedFile">
        <span class="mdc-typography--body1">{{$t(i18nDictionary.Projects.Overview.UploadEntries)}}</span>
      </div>
      <input type="file" id="fileInput" style="visibility: hidden" ref="uploadInput" v-on:input="readFileFromInput"/>
    </v-container>
    <v-dialog v-model="dialogOpen" width="450">
      <v-card>
        <v-card-title>
          {{$t(i18nDictionary.Projects.Overview.UploadDialog.Title)}}</v-card-title>
        <v-card-text>
          {{$t(i18nDictionary.Projects.Overview.UploadDialog.EntriesToUpload)}}
          <v-list two-line>
            <v-list-item v-for="e in entriesToUpload" :key="e.Key">
              <v-list-item-content>
                <v-list-item-title>
                  {{e.Key}}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{e.Typ}}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <div v-if="unknown.length > 0">
            {{$t(i18nDictionary.Projects.Overview.UploadDialog.UnknownEntries)}}
            <v-list two-line>
              <v-list-item v-for="e in unknown" :key="e.Key">
                <v-list-item-content>
                  <v-list-item-title>
                    {{e.Key}}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{e.Type}}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
          <div
              class="px-0"
          >
            <v-checkbox
                v-model="override"
                :label="$t(i18nDictionary.Projects.Overview.UploadDialog.Override)"
                dense
            ></v-checkbox>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text color="primary" @click="dialogOpen = false">{{$t(i18nDictionary.Common.Abort)}}</v-btn>
          <v-btn text color="primary" @click="upload">{{$t(i18nDictionary.Common.Upload)}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import {i18nDictionary} from "../i18n/Keys";
import Vue from "vue";
import AnalyseFile from "../analyseFile/analyseFile";
import {BibEntry} from "../api/bibEntries/Entry";
import ActionTypes from "../store/ActionTypes";

export default Vue.extend({
  //TODO: in upload-dialog einträge weg x-en
  name: "CitaviDragNDrop",
  data() {
    return {
      i18nDictionary: i18nDictionary,
      entriesToUpload: [] as BibEntry[],
      unknown: [] as {Key: string, Type: string}[],
      dialogOpen: false,
      override: true
    }
  },

  methods: {
    triggerFileSelect() {
      (this.$refs.uploadInput as HTMLElement).click();
    },

    async readFileFromInput() {
      const files = (this.$refs.uploadInput as HTMLInputElement).files;
      if( files ) {
        const result = await AnalyseFile(files[0], this.$store.state.ProjectView.CurrentProjectData.bibTypes)
        this.setResult(result)
      }

    },

    async readDroppedFile(e: DragEvent) {
      const dT = new DataTransfer();
      let file = e.dataTransfer?.files[0]
      if(!file) {
        return
      }
      dT.items.add(file);
      let reader = new FileReader();
      reader.readAsText(dT.files[0], "UTF-8");
      reader.onload = async ()=>{
        const result = await AnalyseFile(dT.files[0], this.$store.state.ProjectView.CurrentProjectData.bibTypes)
        this.setResult(result)
      }
    },

    setResult(result: {error: string, entries: BibEntry[], unknown: {Key: string, Type: string}[]}){
      if( result.error === '' ) {
        this.entriesToUpload = result.entries;
        this.unknown = result.unknown;
        this.dialogOpen = true;
      }
    },

    upload() {
      this.$store.dispatch(ActionTypes.Projects.Overview.UploadEntries, {
        project: this.$store.state.ProjectView.CurrentProject,
        entries: this.entriesToUpload,
        override: this.override
      });
      this.dialogOpen = false;
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';
#drop_zone{
  width: calc(100% - 20px);
  border: 3px dotted var(--v-accent-lighten4);
  border-radius: 8px;
  height: 80px;
  margin: 0 8px 8px 8px;
  padding: 0 8px;
  display: table;
  cursor: pointer;
  & span{
    width: 100%;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    color: var(--v-accent-lighten4);
    font-weight: bold;
  }
}
</style>