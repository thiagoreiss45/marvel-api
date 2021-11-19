<template>
    <md-card class = "card-default">
        <md-card-media>
            <img class ="imagem-quadrinho" :src="imagem" alt="People">
        </md-card-media>

        <md-card-header>
            <div class="md-title">{{titulo}}</div>
        </md-card-header>

        <md-card-expand>
            <md-card-actions md-alignment="space-between">
                <md-card-expand-trigger v-if="descricao !== null">
                    <md-button>Learn more</md-button>
                </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
                <md-card-content >
                    {{descricao}}
                </md-card-content>
            </md-card-expand-content>
        </md-card-expand>
    </md-card>
</template>

<script>
export default {
    name: 'comic',
    props: {
        imagem: {
            type: String
        },
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String
        }
    },
    comicsToShow: 10
}
</script>

<style scoped>
    .md-card .md-title{
        height: 100px;
    }
    .md-card-media{
        height: 206px;
        width: 100%;
    }

    .imagem-quadrinho {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .card-default {
        margin: 18px;
        justify-content: flex-start;
        align-items: center;
        display: flex;
        flex-direction: column;
        background: #f5f3f3 !important;
        height: 93%;
    }
    /* .md-card {
        padding: 28px;
        margin: 18px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        background: #FFF !important;
        width: 320px;
        vertical-align: top;
    } */

</style>