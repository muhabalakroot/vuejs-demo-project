<template>
  <base-card>
    <h2>Register As A Coache Now!!</h2>
    <CoachesForm @save-data="saveData" />
  </base-card>
</template>
<script>
import { mapActions } from 'vuex';

import CoachesForm from '../../components/coaches/CoachesForm.vue';

export default {
  components: {
    CoachesForm,
  },
  methods: {
    ...mapActions({
      registerCaoch: 'coaches/registerCaoch',
    }),
    saveData(data) {
      this.registerCaoch(data);
    },
  },
};
</script>
