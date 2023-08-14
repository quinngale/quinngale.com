import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown, faArrowUpRightFromSquare } from '@fortawesome/pro-regular-svg-icons'
import { faBriefcase, faGraduationCap, faEnvelope, faHeadset, faDatabase, faFileCertificate } from '@fortawesome/pro-solid-svg-icons';
import { faGithub, faJs, faHtml5, faCss3, faVuejs, faPython, faLinux, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(faAngleDown, faEnvelope, faGithub, faBriefcase, faGraduationCap, faArrowUpRightFromSquare, faHeadset, faJs, faHtml5, faCss3, faVuejs, faPython, faDatabase, faLinux, faMicrosoft, faFileCertificate);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {});
})