<template>
    <div>
        <header class="primary--bg white--text pa-3 elevated-2">
            <h2 class="ma-0">Hello, Semantic Components!</h2>
        </header>

        <section class="container">
            <div class="row wrap">
                <div class="cell pa-2 xs12 text-xs-center size-large">
                    Hey! This block demonstrates <code>stylus-helpers</code>!
                </div>
                <div class="cell pa-2 xs12 md6 secondary--text">1/2</div>
                <div class="cell pa-2 xs12 md6 error--bg white--text">1/2</div>

                <div class="cell xs12 mt-5 pa-3 elevated-1">
                    <h3 class="mt-0">Components</h3>

                    <p>
                        <my-btn type="submit" elevated="2">Push me!</my-btn>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'App',
    components: {
    }
};
</script>
