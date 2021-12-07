Vue.component('app-products', {
    data() {
        return {
            title: 'Hello Products',
            products: [
                {
                    title: 'cock'
                },
                {
                    title: 'milk'
                },
                {
                    title: 'pepsi'
                }
            ]
        }
    },
    template:   `
        <div class="prodcuts">  
            <div v-for="product in products">
                <app-product
                    @change-title="listenChangeTitle"
                    :productData="product"
                ></app-product>
            </div>
        </div>
    `,
    methods: {
        listenChangeTitle(who) {
            // console.log(' Clever component', who);
            const modProduct = this.products.find(({ title }) => title == who);

            console.log(modProduct, 'modProduct');

            modProduct.title += ' Mod';

            
        }
    }
});


// Event bu, Vuex

Vue.component('app-product', {
    props: [
        'productData'
    ],
    template:   `
        <div class="prodcut">  
            {{productData.title}}

            <button @click="onChangeTitle"> change </button>
        </div>
    `,
    methods: {
        onChangeTitle() {
            // this.productData.title = 'Foo'; --- bad practice

            this.$emit('change-title', this.productData.title);
        }
    }
});



var vue = new Vue({
    el: '#app'
});