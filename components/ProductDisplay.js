app.component('product-display', {
    template:
        /*html*/
        `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img
                    :src="image"
                    :class="!inStock ? 'out-of-stock-img' : ''"
                >
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <p>Sizes: </p>
                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>

                <div
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{ 'background-color': variant.color }">
                </div>

                <button
                    class="button"
                    :class="{ 'disabledButton': !inStock }"
                    :disabled="!inStock"
                    @click="addToCart">
                    Add to Cart
                </button>

                <button class="button" @click="removeFromCart">Remove</button>
            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data() {
        return {
            product: 'Socks',
            description: 'Comfy green socks',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: false },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false }
            ],
            sizes: ['s', 'l', 'xl'],
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
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
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            } else {
                return 2.99
            }
        }
    },
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    }
})