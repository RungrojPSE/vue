import { defineStore } from 'pinia';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostState {
  title: string;
  body: string;
  userId: number;
  result: Post | null;
  loading: boolean;
  error: string | null;
}

export const usePostStore = defineStore('postStore', {
  state: (): PostState => ({
    title: '',
    body: '',
    userId: 0,
    result: null,
    loading: false,
    error: null,
  }),
  actions: {
    async submitPost() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          title: this.title,
          body: this.body,
          userId: this.userId,
        });
        // Simulate a custom response (since the real API won't return the same as your example)
        this.result = response.data;
      } catch (error) {
        this.error = (error as Error).message;
      } finally {
        this.loading = false;
      }
    },
  },
});