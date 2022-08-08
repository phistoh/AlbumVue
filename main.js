const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        removeFromCart(id) {
            if(this.cart.length > 0) {
                this.cart.pop()
            }
        },
        updateCart(id) {
            this.cart.push(id)
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