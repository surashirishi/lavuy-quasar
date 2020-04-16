<template>
  <div class="dialog bg-white">
    <div class="q-pa-lg">

      <div class="row no-wrap items-end ">
        <q-img
          style="width: 70px; margin: 4px 0px"
          :ratio="1"
          class="rounded-borders"
          :src="dogDetailData.image"
        />
        <div class="namearea q-pa-sm text-h5">
          {{dogDetailData.name}}
        </div>
      </div>

      <q-separator  spaced />

      <div class="row items-start q-gutter-md">
        <q-responsive :ratio="16/11" class="col">
          <div class="rounded-borders text-white">
              <q-carousel
                animated
                v-model="slide"
                navigation
                infinite
                arrows
                transition-prev="slide-right"
                transition-next="slide-left"
                class="rounded-borders"
              >
                <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
              </q-carousel>
          </div>
        </q-responsive>
        <q-responsive :ratio="16/11" class="col">
          <div class="rounded-borders row ">
            <div class="col-4 q-pa-md column">
              性別
            </div>
            <div class="col-8 q-pa-md column-flex">
              {{isDogBoy ? "男の子" : "女の子"}}
              <q-icon name="fas fa-paw" :class="dogSex ? 'text-primary' : 'text-pink'" />
            </div>
            <div class="col-4 q-pa-md column">
              犬種
            </div>
            <div class="col-8 q-pa-md column">
              {{dogDetailData.dog_type}}
            </div>
            <div class="col-4 q-pa-md column">
              特技
            </div>
            <div class="col-8 q-pa-md column">
              {{dogDetailData.skill}}
            </div>
            <div class="col-4 q-pa-md column">
              年齢
            </div>
            <div class="col-8 q-pa-md column">
              {{dogDetailData.age}} さい
            </div>
            <div class="col-4 q-pa-md column">
              毛色
            </div>
            <div class="col-8 q-pa-md column">
              {{dogDetailData.hair_color}}
            </div>
            <div class="col-4 q-pa-md column-large">
              飼い主
            </div>
            <div class="col-8 q-pa-md column-large">
              {{ownerData.name}}
            </div>
            <div class="col-4 q-pa-md column">
              住所
            </div>
            <div class="col-8 q-pa-md column">
              {{ownerData.address}}
            </div>
          </div>
        </q-responsive>
      </div>

      <q-separator spaced />

      <div class="row flex-end items-center">
        <q-btn flat size="1.4em" label="キャンセル" color="primary" v-close-popup />
        <q-btn flat size="1.4em" label="予約する" color="primary" v-close-popup />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DogDetailDialog',
  data () {
    return {
      slide: 1,
      dogDetail: {},
      ownerData: {}
    }
  },
  props: ['dogDetailData'],
  created () {
    console.log(this.dogDetailData)
    this.$store.dispatch('getOwnerInfo', this.dogDetailData.owner_id).then((ownerData) => {
      this.ownerData = ownerData
    })
  },
  methods: {
    close () {
      this.$emit('close')
    }
  },
  computed: {
    isDogBoy () {
      if (this.dogDetailData.sex === 1) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.dialog
  box-shadow: none !important
  .flex-end
    justify-content: flex-end
  .text-center
    text-align: center
  .column
    border-left: 1px solid rgba(86, 61, 124, .2)
  .column-flex
    border-left: 1px solid rgba(86, 61, 124, .2)
    display: flex
  .column-large
    border-left: 1px solid rgba(86, 61, 124, .2)
    border-top: 1px solid rgba(86, 61, 124, .2)

.card-box
  padding: 20px 84px
  .mid-padding
    justify-content: space-around;
    align-items: center;
    padding: 4px
    .dog-image
      height: 300px
      width: 300px
      border-radius: 10%;
</style>
