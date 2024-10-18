<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface User {
  id: number;
  name: string;
  age: number;
}

export default defineComponent({
  name: 'UserList',
  setup() {
    const users = reactive<User[]>([
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 35 },
    ]);

    const userNames = users.map((user) => `${user.name} (${user.age} years old)`);

    return {
      users,
      userNames,
    };
  },
});
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
