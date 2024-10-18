// Example of using store in TypeScript
import { useStore } from ".";

export default {
  setup() {
    const store = useStore();

    // Accessing state
    const currentCount = store.count;

    // Calling actions
    store.increment();

    return {
      currentCount,
    };
  },
};
