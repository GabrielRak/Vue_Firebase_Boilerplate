<template>
    <div class="flex flex-col md:flex-row p-6 mt-24">
        <div class="flex-1 p-4">
            <About_content 
                content="Welcome to EcoCompass! We are dedicated to providing sustainable solutions
      for a better future. Our mission is to guide individuals and businesses
      towards eco-friendly practices that benefit both the environment and
      society."
                encourage="Check out our articles for more information."
            />
        </div>
        <div class="flex-1 p-4">
            <img src="../../assets/images/Desert.jpg" alt="Pixabay image" class="w-full h-96 rounded-lg shadow-lg">
        </div>
    </div>
</template>

<script>
import About_content from '../../components/About_content.vue';

export default {
    name: 'About',
    components:{
        About_content
    }
}
</script>