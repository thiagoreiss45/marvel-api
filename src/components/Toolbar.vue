<template>
    <div class="header">
        <md-toolbar class="md-primary">
            <img class ="logo-marvel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" >
        </md-toolbar>

        
    </div>
</template>

<script>
export default {
    name: 'toolbar',
}
</script>
<style scoped>
    .md-primary{
    background-color: #ed1d24;
    display: flex;
    justify-content: center;
    align-items: center;        
    position: fixed;
    top: 0;
    width: 100%;
    }

    .logo-marvel{
        height: 56px;
        margin: 0.6%;
    }
</style>