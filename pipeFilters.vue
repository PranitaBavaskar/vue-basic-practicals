<template>
    <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

        <h1>{{ name | Ucase }}</h1>
        <h1>{{ amount | currencyConverter }}</h1>

    </div>
</template>
<script>
export default {
    name: 'pipeFilters',
    data()
    {
        return {
            name: 'pipeFilters',
            amount:100,
        }
    }
}
</script>