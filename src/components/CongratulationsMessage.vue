<script>
export default {
    name: "CongratulationsMessage"
}
</script>

<template>
    <div class="message">
        <div class="message-box d-flex flex-column justify-content-center align-items-center">
            <div class="h1">Вы успешно справились!
                <div class="d-flex justify-content-center w-100 mt-5">
                    <button onclick="window.location.reload()" class="toMenu bg-warning m-1">На главную</button>
                    <button onclick="window.location.reload()" class="to-next m-1">Следующий уровень</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.message {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    background-image: url("/public/assets/img/cong.png");
    background-size: cover;
    background-repeat: no-repeat;
//backdrop-filter: blur(10px); background-color: rgba(0, 0, 0, 0.1);
}

.message-box {
//font-size: 7rem; position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    place-content: center;
    width: 80vw;
    height: 75vh;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 10px 0 rgba(137, 137, 137, 0.75);
    border-radius: 2vw;
    overflow: hidden;

}

.toMenu {
//font-family: CyrRound, serif; color: white;
    font-size: 6vh;
    text-align: center;
    padding: 0.25vh 1.5vw;
    margin: 0 1vw;
    background: #45b100;
    border-radius: 1vw;
    border: 0.15vw solid white;
    width: 30%;
    text-decoration: none;
}

.to-next {
//font-family: CyrRound, serif; color: white;
    font-size: 6vh;
    text-align: center;
    padding: 0.25vh 1.5vw;
    margin: 0 1vw;
    background: #45b100;
    border-radius: 1vw;
    border: 0.15vw solid white;
    width: 30%;
    text-decoration: none;
}

.h1 {
    font-size: 7rem;
}
</style>