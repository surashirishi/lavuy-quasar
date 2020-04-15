<template>
  <q-card class="card" @click="openDialog">

      <q-img :src="dogData.image" class="dog-image" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            <q-icon name="fas fa-paw" :class="dogSex" />
            {{ dogData.name }}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <!-- <q-rating v-model="stars" :max="5" size="32px" /> -->
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          1h / ¥ {{dogData.reward}}
        </div>
        <div class="text-caption text-grey">
          住所： {{ownerData.address}}
        </div>
        <div class="text-caption text-red-3">
          飼い主： {{ownerData.name}}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
export default {
  name: 'RateCard',
  data () {
    return {
      stars: 4,
      ownerData: []
    }
  },
  created () {
    this.$store.dispatch('getOwnerInfo', this.dogData.owner_id).then((ownerData) => {
      this.ownerData = ownerData
    })
  },
  methods: {
    openDialog () {
      this.$emit('open', this.dogData.id)
    }
  },
  computed: {
    dogSex () {
      if (this.dogData.sex === 1) {
        return 'text-primary'
      } else {
        return 'text-pink'
      }
    }
  },
  props: ['dogData']
}
</script>

<style lang="sass" scoped>
.card
  min-width: 200px
  .dog-image
    height: 150px
</style>
