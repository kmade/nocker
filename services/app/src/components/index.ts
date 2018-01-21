import * as R from 'ramda';
import { AppNocker }  from './app-nocker';

const components = {
    AppNocker,
};

const kebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
const define = component => window.customElements.define(kebabCase(component), components[component]);
R.keys(components).map(define);



