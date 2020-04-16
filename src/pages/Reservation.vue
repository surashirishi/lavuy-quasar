<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 500px" class="shadow-2 rounded-borders">
      <q-page-container>
        <q-page class="q-pa-md row items-start q-gutter-md">
          <!-- <p v-for="(dog, index) in dogs" :key="index">
            <RateCard
              :dogData="dog"
              @open="showDogDetail"
            />
          </p>
          <q-dialog v-model="open" full-height full-width>
            <DogDetailDialog
              :dogDetailData="selectedDogDetail"
              @close="open=false"
            />
          </q-dialog> -->
          予約情報のページ

        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
// import RateCard from 'components/Cards/RateCard'
// import DogDetailDialog from 'components/Dialogs/DogDetailDialog'

export default {
  name: 'Reservation',
  data () {
    return {
      dogs: [],
      selectedDogDetail: [],
      selectedDogId: 0,
      open: false
    }
  },
  components: {
    // RateCard,
    // DogDetailDialog
  },
  methods: {
    showDogDetail (dogId) {
      this.open = true
      this.$store.dispatch('getDogDetail', dogId).then((dogDetailData) => {
        this.selectedDogDetail = dogDetailData
      })
    }
  },
  created () {
    this.$store.dispatch('getAllDogs').then((dogsData) => {
      this.dogs = dogsData
    })
  }
}
</script>

<style lang="sass" scoped>
</style>
