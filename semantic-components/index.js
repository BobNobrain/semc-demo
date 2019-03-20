export default {
    install(Vue, { appearance = {} } = {}) {
        const appearanceProps = appearance.props || [];

        Vue.prototype.$semc = new Vue({
            methods: {
                appearanceClasses(vm) {
                    const result = [];
                    for (let i = 0; i < appearanceProps.length; i++) {
                        const {
                            prefix = '',
                            name,
                            suffix = ''
                        } = appearanceProps[i];


                        if (name in vm) {
                            const propValue = vm[name];
                            result.push([prefix, propValue, suffix].join(''));
                        }
                    }
                    return result;
                }
            }
        });
    }
};
