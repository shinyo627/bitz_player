<template>
  <!-- Auth Modal -->
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal"
  :class='{hidden: !authModalShow}'>
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center
      sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent='toggleAuthModal'>
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <!-- Pressence of utility classes in line 34 will be determined by
          truthiness of data tab property -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a class="block rounded py-3 px-4 transition"
              href="#" @click.prevent="tab = 'login'"
                :class="{
                  'hover: text-white text-white bg-blue-600' : tab === 'login',
                  'hover: text-blue-600': tab === 'register'
                  }"
                >Login</a>
            </li>
            <li class="flex-auto text-center">
              <a class="block rounded py-3 px-4 transition"
                href="#" @click.prevent="tab = 'register'"
                 :class="{
                  'hover: text-white text-white bg-blue-600' : tab === 'register',
                  'hover: text-blue-600': tab === 'login'
                  }"
                >Register</a>
            </li>
          </ul>

        <LoginForm v-if="tab == 'login'"/>
        <RegisterForm v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import RegisterForm from './RegisterForm.vue';
import LoginForm from './LoginForm.vue';

export default {
  name: 'AuthModal',
  components: {
    LoginForm, RegisterForm,
  },
  data() {
    return {
      tab: 'login',
    };
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
  },
  computed: {
    // Option to use MapState to PURELY retrieve store state
    ...mapState(['authModalShow']),

    // ** Maping functions can do aliasing for each properties of states/getters/mutations
    // before using them in respective component
    // ...mapState({
    //   modal: 'authModalShow',
    // }),

    // Option to use mapGetters to retrieve store state but this getters function can do computation
    // ...mapGetters(['authModalShow])

    // Option to directly get sates from store's getters
    // authModalShow() {
    //   return this.$store.getters.authModalShow;
    // },
  },
};
</script>
