<template>
    <div class="styled-input">
        <label :for="id">{{ label }}</label>
        <input :id="id" :type="type" v-bind="value" :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    name: 'StyledInput',
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
label{
    font-size:32px; 
}
.styled-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.styled-input label {
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.styled-input input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}
</style>