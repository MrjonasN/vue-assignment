<template>
  <tr>
    <td scope="row">
      <img :src="item.product.image" alt class="w-50 z-depth-0" />
    </td>

    <td></td>

    <td>
      <h5>{{ item.product.name }}</h5>
    </td>

    <td></td>

    <td>{{ item.product.price }}</td>

    <td></td>

    <td class="d-flex">
      <span class="qty mr-3">{{item.quantity}}</span>
      <div class="btn-group btn-group-sm" role="group" aria-label="quantity">
        <button type="button" class="btn btn-grey px-3" v-on:click.stop="decrementInCart(item)">-</button>
        <button type="button" class="btn btn-grey px-3" v-on:click.stop="incrementInCart(item)">+</button>
      </div>
    </td>

    <td class="font-weight-bold">
      <strong>{{ item.product.price * item.quantity }}</strong>
    </td>

    <td>
      <div class="btn-group btn-group-sm" role="group" aria-label="trash">
        <button
          class="btn btn-danger px-3"
          v-on:click.stop="deleteProductFromCart(item.product._id)"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </td>
  </tr>

</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Order",
  props: ["item"],
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    ...mapActions(['decrementInCart','incrementInCart','deleteProductFromCart'])
  }
};
</script>

<style>
</style>