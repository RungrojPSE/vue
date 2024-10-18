<template>
  <!-- Button to open modal -->
  <button type="button" class="btn btn-primary" @click="showModal">
    Open Modal
  </button>

  <!-- Modal structure -->
  <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
          <button type="button" class="btn-close" @click="hideModal"></button>
        </div>
        <div class="modal-body">
          This is the modal content.
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
import { onMounted, ref } from 'vue';

let bootstrapModal: any = null;
let myModal: any = ref(null);
const modal = ref<HTMLDivElement | null>(null);

const showModal = () => {
  if (bootstrapModal) bootstrapModal.show();
};

const hideModal = () => {
  if (bootstrapModal) bootstrapModal.hide();
};

onMounted(() => {
  // Dynamically import Bootstrap's modal JavaScript
  import('bootstrap').then(({ Modal }) => {
    if (modal.value) {
      bootstrapModal = new Modal(modal.value);
    }
  });
});
</script>
