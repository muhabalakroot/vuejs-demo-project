<template>
  <CoachesFilter @change-filter="setFilter" />
  <section>
    <base-card>
      <div>
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register a Coach</base-button>
      </div>
      <!-- ['id', 'firstName', 'lastName', 'area'] -->
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :areas="coach.areas"
          :rate="coach.hourlyRate"
        ></coach-item>
      </ul>
      <h3 v-else>No Coaches Found</h3>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachesFilter from '../../components/coaches/CoachesFilter.vue';

export default {
  components: {
    CoachItem,
    CoachesFilter,
  },
  data() {
    return {
      filteredData: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    ...mapGetters({
      coaches: 'coaches/coaches',
      hasCoaches: 'coaches/hasCoaches',
    }),
    filteredCoaches() {
      return this.coaches.filter((coach) => {
        if (this.filteredData.frontend && coach.areas.includes('frontend'))
          return true;
        if (this.filteredData.backend && coach.areas.includes('backend'))
          return true;
        if (this.filteredData.career && coach.areas.includes('career'))
          return true;
      });
    },
  },
  methods: {
    setFilter(updatedFilters) {
      this.filteredData = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
