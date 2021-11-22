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
                <md-card-expand-trigger>
                    <md-button>Learn more</md-button>
                </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content >
                <md-card-content v-if="descricao !== null && descricao !== '' ">
                    <b>Descrição:</b> {{descricao}} <br>
                    <b>Preco:</b> ${{preco}} <br>
                    <b>Nº de Páginas:</b> {{paginas}} <br>
                </md-card-content>
                <md-card-content v-else>
                    <b>Descrição:</b> Não disponível <br>
                    <b>Preco:</b> ${{preco}} <br>
                    <b>Nº de Páginas:</b> {{paginas}} <br>
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
        },
        preco: {
            type: Number
        },
        paginas: {
            type: Number
        }
    },
    comicsToShow: 10
}
</script>

<style scoped>
    .md-card .md-title{
        height: 100px;
    }
    .md-card-content{
        padding: 16px;
        font-size: 12px;
        line-height: 16px;
    }
    .md-card-media{
        height: 206px;
        width: 100%;
    }
    .md-card-actions.md-alignment-space-between {
        justify-content: center;
    }

    .imagem-quadrinho {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .card-default {
        margin: 18px;
        justify-content: flex-start;
        display: flex;
        flex-direction: column;
        background: #f5f3f3 !important;
        height: 93%;
    }
    @media (max-width: 600px){
        .md-card .md-title{
            height: 104%;
        }
    }
</style>