<template>
    <div>
        <h1>Bind components</h1>
        <!-- for single line -->
        <h1>{{message}}</h1>
        <input type="text" v-model="message">
        <!-- for multi line -->
        <h1 style="white-space:pre-line">{{message}}</h1>
        <textarea type="text" v-model="message"/>

    </div>
</template>

<script>

export default {
    name: 'dataBindings',
    data()
    {
        return {
            message: 'Hi'
        }
    }

}
</script>