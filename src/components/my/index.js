import { VNodes } from '../../../semantic-components/components/utils';

import MyBtn from './MyBtn';

// MyAwesomeComponentFramework
export default {
    install(Vue, config) {
        Vue.component(VNodes.name, VNodes);

        console.log(MyBtn);
        Vue.component('MyBtn', MyBtn);
    }
};
