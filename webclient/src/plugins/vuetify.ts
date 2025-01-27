import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#009835',
                primaryText: '#FFFFFF',
                secondary: '#52634f',
                accent: colors.shades.black,
                error: '#ba1a1a',
                background: '#FFFFFF'
            },
            dark: {
                primary: '#15a835',
                secondary: '#b9ccb4',
                accent: colors.shades.white,
                error: '#CF6679',
                background: '#121212',
            }
        },
    },
    icons: {
        iconfont: 'mdi',
    },
});