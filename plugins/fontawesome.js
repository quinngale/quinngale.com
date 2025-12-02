// import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { faBriefcase, faCaretLargeRight, faCaretDown, faCat, faDatabase, faDisplayCode, faEnvelope, faFileCertificate, faGraduationCap, faHeadset, faHouse, faNewspaper, faTag, faUser } from '@fortawesome/pro-solid-svg-icons';
// import { faApple, faCss3, faGit, faGithub, faHtml5, faLinux, faJs, faMicrosoft, faPhp, faPython, faSass, faVuejs, faWindows, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// config.autoAddCss = false;

// // Solid icons
// library.add(faBriefcase, faCaretLargeRight, faCaretDown, faCat, faDatabase, faDisplayCode, faEnvelope, faFileCertificate, faGraduationCap, faHeadset, faHouse, faNewspaper, faUser);

// // Brand icons
// library.add(faApple, faCss3, faGit, faGithub, faHtml5, faLinux, faJs, faMicrosoft, faPhp, faPython, faSass, faTag, faVuejs, faWindows, faLinkedin);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon, {});
})