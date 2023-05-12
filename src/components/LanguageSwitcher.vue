<template>
  <div class="language-switcher mt-4">
    <select v-model="selectedLanguage" @change="setLanguage">
      <option v-for="language in supportedLanguages" :value="language" :key="language">
        {{ language }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      supportedLanguages: ['en', 'fr', 'it', 'la'],
      selectedLanguage: this.$i18n.locale,
    };
  },
  methods: {
    setLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    },
  },
};
</script>
<style scoped>
.language-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
}

select {
  font-size: 1rem;
  font-family: inherit;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
}
</style> 