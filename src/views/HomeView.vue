<template>

    <CongratulationsMessage v-if="success" />
    <div class="title text-center">
        Гамма ля минор
    </div>
    <div id="game" ref="game">

        <div class="clef-container drag-container">

        </div>

        <div class="lines">
            <hr id="line-5">
            <hr id="line-4">
            <hr id="line-3">
            <hr id="line-2">
            <hr id="line-1">
        </div>


    </div>


</template>

<script>
// @ is an alias to /src


import {Game} from "@/assets/Game";
import CongratulationsMessage from "@/components/CongratulationsMessage.vue";

export default {
    name: 'HomeView',
    components: {CongratulationsMessage},
    data() {
        return {
            game: {},
            success: false
        }
    },
    mounted() {
        this.game = new Game(this.$refs.game)
        this.game.addEvents(this)
        console.log(this)
    },
    watch: {
        'game.success'(newVal) {
            console.log(1)
            this.success = newVal
        }
    }

}
</script>

<style scoped>

#game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    flex-grow: 1;
}

hr {
    width: 100%;
    margin: 0;
    border-top: 1px black solid!important;
    opacity: 1;
    z-index: 2;
    height: 5vh;
}


.title {
    position: absolute;
    top: 5vh;
    width: 100%;
    font-size: 4rem;
}


</style>