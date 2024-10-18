import { defineStore } from 'pinia';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface State {
  request: { id: number } | null;
  response: Post | null;
  loading: boolean;
  error: string | null;
}

export const usePostStore = defineStore('post', {
  state: (): State => ({
    request: null,
    response: null,
    loading: false,
    error: null,
  }),

  actions: {
    setRequest(id: number) {
      this.request = { id };
    },

    async fetchPost() {
      if (!this.request) {
        this.error = 'Request ID is not set.';
        return;
      }

      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get<Post>(
          `https://jsonplaceholder.typicode.com/posts/${this.request.id}`
        );
        this.response = response.data;
      } catch (error) {
        this.error = (error as Error).message;
      } finally {
        this.loading = false;
      }
    },
    async fetchPost2(id: number) {
      this.loading = true;
      this.error = null;
      this.request = { id };

      try {
        const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.response = response.data;
      } catch (error) {
        this.error = (error as Error).message;
      } finally {
        this.loading = false;
      }
    },

  },
});
