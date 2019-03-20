import Vue from 'vue';
import defineLinkComponent from '../../helpers/link';

export default Vue.extend({
    props: {
        // button
        type: {
            type: String,
            default: 'button'
        },

        // link
        to: {
            type: String,
            default: ''
        },
        exact: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        linkComponent() {
            return defineLinkComponent(this);
        }
    },

    methods: {
        renderButton(h, classes = []) {
            let componentName = 'button';
            let componentAttrs = {
                class: classes.concat(this.$semc.appearanceClasses(this)),
                attrs: {}
            };

            if (this.to) {
                // this is a link
                const { name, prop } = this.linkComponent;
                componentName = name;

                if (name === 'a') {
                    componentAttrs.attrs.href = this.to;
                } else {
                    componentAttrs.props = {
                        [prop]: this.to,
                        exact: this.exact
                    };
                }
            } else {
                componentAttrs.attrs.type = this.type;
            }

            return h(componentName, componentAttrs, this.$slots.default);
        }
    }
});
