import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBriefcase, faDatabase, faEnvelope, faFileCertificate, faGraduationCap, faHeadset } from '@fortawesome/pro-solid-svg-icons';
import { faAngleDown, faArrowUpRightFromSquare } from '@fortawesome/pro-regular-svg-icons'
import { faCss3, faGithub, faHtml5, faLinux, faJs, faMicrosoft, faPython, faVuejs } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
// Solid icons
library.add(faBriefcase, faDatabase, faEnvelope, faFileCertificate, faGraduationCap, faHeadset);

// Regular icons
library.add(faAngleDown, faArrowUpRightFromSquare);

// Brand icons
library.add(faCss3, faGithub, faHtml5, faLinux, faJs, faMicrosoft, faPython, faVuejs);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {});
})