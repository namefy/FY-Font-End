import Vue from "vue";


export default Vue.extend({
    name: 'menu-item',
    props: {
        menuData: Array,
        origin: Boolean,
        collapse: Boolean,
        mode: String
    },
    data() {
        return {

        }
    },
    mounted() {
        console.log(this.mode);
    }
});

