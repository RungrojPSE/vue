<script setup lang="ts">
import { reactive } from 'vue';

interface User {
  id: number;
  name: string;
  age: number;
}

// Reactive state for the list of users
const users = reactive<User[]>([
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
]);

// Create an array of user names with formatted strings
const userNames = users.map(user => `${user.name} (${user.age} years old)`);
</script>

<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.age }} years old
      </li>
    </ul>

    <h2>Mapped User Names</h2>
    <ul>
      <li v-for="name in userNames" :key="name">
        {{ name }}
      </li>
    </ul>
  </div>
</template>
