<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="min-height: 500px" class="shadow-2 rounded-borders">
      <q-page-container>
        <q-page class="q-pa-md row items-start q-gutter-md">
          <p v-for="(dog, index) in dogs" :key="index">
            <RateCard
              :dogImage="dog.image"
              :dogName="dog.name"
              :reward="dog.reward"
            />
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import RateCard from 'components/Cards/RateCard'

export default {
  name: 'Home',
  data () {
    return {
      dogs: []
    }
  },

  components: {
    RateCard
  },
  created () {
    this.$store.dispatch('getAllDogs').then((dogsData) => {
      this.dogs = dogsData
    })
  }
}
</script>
