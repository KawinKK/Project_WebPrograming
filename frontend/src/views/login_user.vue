<template>
    <h1 class="text-xl font-bond">🚲Welcome To Easy Jakka Booking🚲</h1>
    <div>
        <label class="input input-bordered flex items-center gap-2 my-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"
                class="w-4 h-4 opacity-70">
                <path
                    d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z" />
            </svg>
            <input type="number" class="grow" placeholder="Student Id" v-model="login.studentId" />
        </label>
        <label class="input input-bordered flex items-center gap-2 my-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd" />
            </svg>
            <input type="password" class="grow" placeholder="password" v-model="login.password" />
        </label>
    </div>
    <button class="bg-sky-500 text-base-100 font-bold w-24 h-10 rounded-md hover:bg-sky-600"
        @click="check()">Confirm</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router';

const login = ref({
    studentId: null,
    password: ''
})

const login_user = async () => {
    try {
        const response = await axios.post('http://localhost:8081/login', {
            studentId: login.value.studentId,
            password: login.value.password,
        });
        
        if (response && response.data && response.data.name) {
            alert("Welcome " + response.data.name);
            const userData = response.data;
            router.push({ path: '/user', query: { data: JSON.stringify(userData) } });
        } else {
            alert("Login successful but missing user data.");
        }
    } catch (err) {
        console.error("An error occurred during login:", err);
        alert("An error occurred during login. Please try again later.");
    }
};


const check = async () => {
    await login_user()
}
</script>

<style lang="scss" scoped></style>