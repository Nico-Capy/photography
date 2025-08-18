<template>
  <div class="language-switcher mt-4">
    <select v-model="selectedLanguage" @change="setLanguage">
      <option
        v-for="language in supportedLanguages"
        :value="language.code"
        :key="language.code"
      >
        {{ language.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      supportedLanguages: [
        { code: "en", name: "English" },
        { code: "fr", name: "Français" },
        { code: "it", name: "Italiano" },
        { code: "la", name: "Latina" },
      ],
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
  font-family: "Avenir", sans-serif;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
}
</style>