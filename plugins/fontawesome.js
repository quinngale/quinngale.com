import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBriefcase, faCat, faDatabase, faEnvelope, faFileCertificate, faGraduationCap, faHeadset, faTag, faChevronRight } from '@fortawesome/pro-solid-svg-icons';
import { faAngleDown, faArrowUpRightFromSquare } from '@fortawesome/pro-regular-svg-icons'
import { faApple, faCss3, faGit, faGithub, faHtml5, faLinux, faJs, faMicrosoft, faPhp, faPython, faSass, faVuejs, faWindows, faLinkedin } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
// Solid icons
library.add(faBriefcase, faCat, faDatabase, faEnvelope, faFileCertificate, faGraduationCap, faHeadset, faChevronRight);

// Regular icons
library.add(faAngleDown, faArrowUpRightFromSquare);

// Brand icons
library.add(faApple, faCss3, faGit, faGithub, faHtml5, faLinux, faJs, faMicrosoft, faPhp, faPython, faSass, faTag, faVuejs, faWindows, faLinkedin);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon, {});
})