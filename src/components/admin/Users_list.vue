<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">User List</h1>
        <ul class="bg-white shadow-md rounded-lg">
            <li v-for="user in users" :key="user.id" class="flex justify-between items-center p-4 border-b last:border-none">
                <div>
                    <p class="text-lg font-semibold">{{ user.username }}</p>
                    <p class="text-sm text-gray-600">{{ user.email }}</p>
                </div>
                <div class="flex space-x-2">
                    <button @click="promoteUser(user)" v-if="user.role === 'user'" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Promote</button>
                    <button @click="degradeUser(user)" v-if="user.role === 'admin'" class="bg-red-400 text-white px-4 py-2 rounded hover:bg-blue-600">Degrade</button>
                    <button @click="deleteUser(user)" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

import { computed, onBeforeMount } from "vue";
import {useUserStore} from "../../store/admin/userStore";

export default{
    name:"Users_list",
    data(){

        return {
            users: []
        };
        },
        setup() {
        const userStore = useUserStore();
        const users = computed(() => userStore.users);

        onBeforeMount(() => {
            userStore.fetchUsers();
        });

        const promoteUser = (user) => {
            userStore.promoteUser(user.uid);
        };

        const degradeUser = (user) => {
            userStore.degradeUser(user.uid);
        };

        const deleteUser = (user) => {
            userStore.deleteUser(user.id);
        };

        return {
            users,
            promoteUser,
            deleteUser,
            degradeUser
        };
        }
    }

</script>=