const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true
        }
    },
    methods: {
        removeFromCart() {
            if(this.cart > 0) {
                this.cart--
            }
        }
    },
    computed: {
        title() {
            onSaleString = ''
            if (this.variants[this.selectedVariant].onSale) {
                onSaleString = ' is on sale!'
            }
            return this.brand + ' ' + this.product + onSaleString
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})