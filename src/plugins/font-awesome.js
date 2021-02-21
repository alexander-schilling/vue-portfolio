import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faUser,
  faUserTie,
  faEnvelope,
  faGlobe,
  faCopyright,
  faCircle,
  faBrain,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";

library.add(
  faUser,
  faUserTie,
  faEnvelope,
  faGlobe,
  faCopyright,
  faCircle,
  faBrain,
  faBriefcase
);
library.add(faLinkedin, faGithub);
library.add(faCircleRegular);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);
