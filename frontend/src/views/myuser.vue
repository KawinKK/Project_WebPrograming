<template>
  <div class="bg-white p-3 border-4 border-sky-400">
    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">About User</h1>
  </div>
  <div class="md:flex no-wrap md:-mx-2 ">
    <div class="w-full md:w-3/12 md:mx-2">
      <img class="w-70 mx-auto h-40 my-10 rounded-full"
        src="https://hips.hearstapps.com/hmg-prod/images/mh-9-22-wick-650dcf0aeb656.jpg?crop=0.447xw:0.895xh;0,0&resize=640:*">
    </div>
    <div class="w-full md:w-9/12 mx-2 my-5 h-64">
      <div class="bg-white p-3 shadow-sm rounded-sm">
        <div class="text-gray-700">
          <div class="grid md:grid-cols-1 text-sm">
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Name</div>
              <div v-if="userData && userData.name" class="px-4 py-2">{{ userData.name }}</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Jakka Id Card</div>
              <div v-if="userData && userData.jakkaId" class="px-4 py-2">{{ userData.jakkaId }}</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Student Id</div>
              <div v-if="userData && userData.jakkaId" class="px-4 py-2">{{ userData.studentId }}</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Password</div>
              <div v-if="userData && userData.jakkaId" class="px-4 py-2">{{ userData.password }}</div>
            </div>
          </div>
        </div>
        <button
          class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
          Edit Profile</button>
      </div>
    </div>
  </div>


</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const userData = ref(null);
    const route = useRoute(); // Use useRoute to access the current route

    onMounted(() => {
      userData.value = JSON.parse(route.query.data || '{}');
    });

    return {
      userData,
    };
  },
};
</script>