<script>
import { Button } from '../../../semantic-components/components/misc';
import { size, color, elevated } from './appearance';

export default Button.extend({
    name: 'MyBtn',
    props: {
        size,
        color,
        elevated
    },

    render(h) {
        return this.renderButton(h, ['my-btn']);
    }
});
</script>
