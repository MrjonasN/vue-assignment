<template>
  <div>
    <ShoppingCartProduct v-for="product in shoppingCart" :key="product._id" :item="product" />

    <div v-if="shoppingCart.length < 1" class="cart-item">
      <div class="p-3 d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center">Din kundvagn är tom</div>
      </div>
    </div>

    <div
      v-if="shoppingCart.length > 0"
      class="p-2 d-flex justify-content-between align-items-center"
    >
      <div class="ml-2">
        <div class="total-price">
          Totalt:
          <span class="ml-1">{{ shoppingCartTotal }} SEK</span>
        </div>
        <small class="text-muted">inkl. moms</small>
      </div>
      
        <router-link to="/checkout" tag="button" class="btn btn-info">Gå till Kassan</router-link>
     
    </div>
  </div>
</template>

<script>
import ShoppingCartProduct from "./ShoppingCartProduct";
import { mapGetters } from "vuex";

export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartProduct
  },
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal"])
  }
};
</script>

<style scoped>
.total-price {
  font-size: 1.1em;
}
</style>