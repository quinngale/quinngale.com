import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown, faArrowUpRightFromSquare } from '@fortawesome/pro-regular-svg-icons'
import { faBriefcase, faGraduationCap, faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(faAngleDown, faEnvelope, faGithub, faBriefcase, faGraduationCap, faArrowUpRightFromSquare);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {});
})