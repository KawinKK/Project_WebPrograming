<template>
    <RouterLink to="/register">
        <button class="bg-blue-400 text-base-100 font-bold w-24 h-20 mb-2 rounded-lg hover:bg-blue-500">Register New User</button>
    </RouterLink>
    
    <div class="overflow-x-auto">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th></th>
                    <th>jakka id</th>
                    <th>name</th>
                    <th>student id</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <tr v-for="(user, index) in users">
                    <th>{{ index + 1 }}</th>
                    <td>{{ user.jakkaId }}</td>
                    <td>{{ user.studentId }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.password }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

const users = ref({});

const fetch_users = async ()=>{
    await axios.get(`${import.meta.env.VITE_API}/getUsers`)
    .then((response)=>{
        users.value = response.data
        console.log(users.value)
    }).catch((err)=>{
        console.log(err)
    });
}

onMounted(()=>fetch_users());

</script>

<style lang="scss" scoped></style>