<template>
  <!-- Button to trigger modal -->
  <button type="button" class="btn btn-primary" @click="showModal">
    Open Modal
  </button>

  <!-- Modal -->
  <div class="modal fade" ref="myModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Modal title</h5>
          <button type="button" class="btn-close" @click="hideModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          This is the content of the modal.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hideModal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

let myModal: any = ref(null);
let bootstrapModal: any = null;

// Function to show modal
const showModal = () => {
  if (bootstrapModal) bootstrapModal.show();
};

// Function to hide modal
const hideModal = () => {
  if (bootstrapModal) bootstrapModal.hide();
};

// Initialize the modal when the component is mounted
onMounted(() => {
  // Dynamically import Bootstrap's modal JavaScript
  import('bootstrap').then(({ Modal }) => {
    if (myModal.value) {
      bootstrapModal = new Modal(myModal.value);
    }
  });
});
</script>

<style scoped>
/* Optional custom styling */
</style>
