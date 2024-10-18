// src/stores/postStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [] as Post[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    checkData() {
      console.log(this.posts)
    },
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.posts = response.data;
        
      } catch (error) {
        this.error = 'Failed to fetch posts';
      } finally {
        this.loading = false;
      }
    },
  },
});
