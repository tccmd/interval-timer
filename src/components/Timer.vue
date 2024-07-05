<template>
  <div class="timer">
    <div class="time">{{  seconds  }}s</div>
    <div class="buttons">
        <button @click="toggle" :class="{'active' : isActive}">{{  isActive ?  'Pause' : 'Start' }}</button>
        <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            seconds: 0,
            isActive: false,
            interval: null,
        }
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive
            if (this.isActive) {
                this.startTimer()
            } else {
                clearInterval(this.interval)
            }
        },
        startTimer() {
            this.interval = setInterval(() => {
                this.seconds += 1
            }, 1000)
        },
        reset() {
            clearInterval(this.interval)
            this.seconds = 0
            this.isActive = false
        },
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
}
</script>

<style>

</style>