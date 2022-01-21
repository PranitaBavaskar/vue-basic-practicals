<template>
    <div>
        <button v-on:click="hello(' & parameter pass')">call hello function</button>
    </div>
</template>
<script>
export default {
    name: 'btnevent',
   props: {}
    ,methods: {
        hello(a)
        {
            alert('hello console called'+ a);
        }
    }
}
</script>