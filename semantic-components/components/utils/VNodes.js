export default {
    name: 'VNodes',
    functional: true,
    render: (h, { props }) => {
        if (typeof props.render === typeof Function) return props.render(h);
        if (Array.isArray(props.nodes)) return props.nodes;
        return [props.node];
    }
};
