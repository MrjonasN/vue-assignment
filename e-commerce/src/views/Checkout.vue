<template>
  <div class="container z-depth-1 p-5 my-5">
    <h3>Din Beställning</h3>
    <section>
      <div class="table-responsive">
        <table class="table product-table table-cart-v-1">
          <thead>
            <tr>
              <th></th>
              <th></th>

              <th class="font-weight-bold">
                <strong>Produkt</strong>
              </th>

              <th></th>

              <th class="font-weight-bold">
                <strong>Pris</strong>
              </th>

              <th></th>

              <th class="font-weight-bold">
                <strong>Antal</strong>
              </th>

              <th class="font-weight-bold">
                <strong>Totalt</strong>
              </th>

              <th class="font-weight-bold">Ta bort</th>
            </tr>
          </thead>
          <tbody>
            <order v-for="product in shoppingCart" :key="product._id" :item="product" />
          </tbody>
        </table>

        <div class="text-right">
          <h4><strong>Totalt: {{shoppingCartTotal}} SEK</strong></h4>
         <button type="button" class="mt-3 btn btn-info">Slutför köp</button>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import Order from "../components/checkout/Order";
import { mapGetters } from "vuex";
export default {
  name: "Checkout",
  components: {
    Order
  },
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal"])
  }
};
</script>

<style>
</style>