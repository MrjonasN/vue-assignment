<template>
  <div class="container my-5 py-5 border">
    <!--Section: Content-->
    <section class="px-md-5 mx-md-5 my-5 text-center text-lg-left dark-grey-text">
      <!--Grid row-->
      <div class="row d-flex justify-content-center">
        <!--Grid column-->
        <div class="col-md-6">
          <!-- Default form login -->
          <form class="text-center" @submit.prevent="loginUser">
            <p class="h4 mb-4">Logga in</p>

            <input type="email" v-model="email" class="form-control mb-4" placeholder="E-mail">
 
            <input type="password" v-model="password" class="form-control mb-4" placeholder="Lösenord">

            <!-- Sign in button -->
            <button class="btn btn-info btn-block my-4" type="submit">Logga in</button>

            <!-- Register -->
            <p>Inte medlem?
              <router-link to="/register">Registrera dig här</router-link>
            </p>
          </form>
          <!-- Default form login -->
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </section>
    <!--Section: Content-->
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
      data() {
        return {
            email: '',
            password: '' 
        }
    },   
  methods: {
    ...mapActions(['loginUser'])
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style>

</style>