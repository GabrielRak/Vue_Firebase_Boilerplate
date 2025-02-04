<template>
    <button class="cta-button">
        Click Me
    </button>
</template>

<script>
export default {
    name: 'CtaButton'
}
</script>

<style scoped>
.cta-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #45a049;
}
</style></script>