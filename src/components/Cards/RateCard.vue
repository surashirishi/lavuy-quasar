<template>
  <q-card class="my-card">

      <q-img :src="dogImage" class="dog-image" />

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
            {{ dogName }}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          1h / ¥ {{reward}}
        </div>
        <div class="text-caption text-grey">
          大阪府茨木市穂積大701
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
      stars: 4
    }
  },
  props: ['dogImage', 'dogName', 'reward']
}
</script>

<style lang="sass" scoped>
.dog-image
  height: 150px
</style>
