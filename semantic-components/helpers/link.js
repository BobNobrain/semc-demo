export default function defineLinkComponent(vueInstance) {
    if (vueInstance.$nuxt) return { name: 'nuxt-link', prop: 'to' };
    if (vueInstance.$router) return { name: 'router-link', prop: 'to' };
    return { name: 'a', prop: 'href' };
}
