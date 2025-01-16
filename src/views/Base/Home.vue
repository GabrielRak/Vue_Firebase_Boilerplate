<template>
  <Hero
    header="Welcome to EcoCompass!"
    subheader="We are dedicated to providing sustainable solutions for a better future."
    buttonText="Learn More"
  />
</template>
<script>
import Hero from "../../components/Hero.vue";

export default {
  name: "Home",
  components: {
    Hero,
  },
};
</script>
