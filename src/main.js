import Vue from 'vue';
import './assets/style/index.styl';
import SemanticComponents from '../semantic-components';

import MyAwesomeComponentFramework from './components/my';
import App from './App.vue';

Vue.use(SemanticComponents, {
    appearance: {
        props: [
            { name: 'color' },
            { name: 'size', prefix: 'sz-' },
            { name: 'elevated', prefix: 'elevated-' }
        ]
    }
});

Vue.use(MyAwesomeComponentFramework);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
