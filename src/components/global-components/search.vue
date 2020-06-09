<template>
    <v-text-field @input="$emit('input', $event)" :label="label" :placeholder="placeholder" single-line hide-details></v-text-field>
</template>
<script>
export default {
    props:{
        label:{
            type: String,
            default: 'label'
        },
        placeholder:{
            type :String,
            required: false
        }
    }
}
</script>