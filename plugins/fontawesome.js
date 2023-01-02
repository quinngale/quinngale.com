import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleUp, faAngleDown, faAt } from '@fortawesome/pro-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(faAngleUp, faAngleDown, faGithub, faAt);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {});
})