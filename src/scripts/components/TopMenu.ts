import Vue from "vue";
import MenuItem from '@/components/MenuItem.vue';

export default Vue.extend({
    name: 'TopMenu',
    props: { menuData: Array },
    components: {
        'menu-item': MenuItem
    },
    data() {
        return {
            isCollapse: false
        };
    },
    mounted() {
    }
});

