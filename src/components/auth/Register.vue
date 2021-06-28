<template>
  <!--Register alert msg box  -->
          <div class='text-white text-center font-bold p-5 mb-4'
          v-if='registerShowAlert' :class='registerAlertVariant'>
            {{ registerAlertMsg }}
          </div>
          <!-- Registration Form -->
          <VeeForm :validation-schema="schema" @submit='register'
          :initial-values='userData'>
            <!-- Name -->
            <div class="mb-3">
              <label class="inline-block mb-2">Name</label>
              <VeeField  type="text" name='name'
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Name" />
                <ErrorMessage class='text-red-600' name='name'/>
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <VeeField type="email" name='email'
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email" />
                <ErrorMessage class='text-red-600' name='email'/>
            </div>
            <!-- Age -->
            <div class="mb-3">
              <label class="inline-block mb-2">Age</label>
              <VeeField type="number" name='age'
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded" />
                <ErrorMessage class='text-red-600' name='age'/>

            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <VeeField  name='password' :bails='false' v-slot='{ field, errors }'>
                <input type="password" class="block w-full py-1.5 px-3
                 text-gray-800 border border-gray-300 transition duration-500
                focus:outline-none focus:border-black rounded"
                placeholder="Password" v-bind='field'/>
                <div class='text-red-600' v-for='error in errors' :key='error'>
                  {{error}}
                </div>
              </VeeField>
                <ErrorMessage class='text-red-600' name='password'/>
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <VeeField type="password" name='confirmPassword'
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirm Password" />
                <ErrorMessage class='text-red-600' name='confirmPassword'/>
            </div>
            <!-- Country -->
            <div class="mb-3">
              <label class="inline-block mb-2">Country</label>
              <VeeField as ='select' name='country'
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded">
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
                <option value="Germany">Germany</option>
                <option value="Antarctica">Antarctica</option>
              </VeeField>

              <ErrorMessage class='text-red-600' name='country'/>
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <VeeField type="checkbox" name='tos' value='1'
              class="w-4 h-4 float-left -ml-6 mt-1 rounded inline-block" />
              <label class="inline-block">Accept terms of service</label>

              <ErrorMessage class='text-red-600 block' name='tos'/>
            </div>
            <!-- :disable the button to prevent spam -->
            <button type="submit" :disabled='registerInSubmission'
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700">
              Submit
            </button>
          </VeeForm>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:50|alphaSpaces',
        email: 'required|min:3|max:50|email',
        age: 'required|minVal:12|maxVal:100',
        password: 'required|min:3|max:32',
        confirmPassword: 'passwordMismatch:@password',
        country: 'required|countryExcluded:Antarctica',
        tos: 'tos',
      },
      userData: {
        country: 'USA',
      },
      registerInSubmission: false,
      registerShowAlert: false,
      registerAlertVariant: 'bg-blue-500',
      registerAlertMsg: 'Please wait! Your account is being created.',

    };
  },
  methods: {
    register(values) {
      this.registerShowAlert = true;
      this.registerInSubmission = true;
      this.registerAlertVariant = 'bg-blue-500';
      this.registerAlertMsg = 'Please wait! Your account is being created.';

      this.registerAlertVariant = 'bg-green-500';
      this.registerAlertMsg = 'Success! Your account has been created';
      console.log(values);
    },
  },
};
</script>
