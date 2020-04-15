<template>
  <div class="dialog">
    <q-card class="card-box">
      <q-card-section>
        <div class="text-h6">
          {{dogDetailData.name}}
          <q-icon name="fas fa-paw" :class="dogSex" />
        </div>
        <div class="text-h6">owner: {{ownerData.name}}</div>
      </q-card-section>

      <q-separator spaced />

      <div class="row mid-padding">
        <q-img :src="dogDetailData.image" class="dog-image col-4" />
        <div class="q-pa-md">
          <q-table
            :data="data"
            :columns="columns"
            row-key="name"
          />
        </div>
      </div>

      <q-separator spaced />

      <q-card-actions align="right">
        <q-btn flat label="キャンセル" color="primary" v-close-popup />
        <q-btn flat label="予約する" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>

  </div>
</template>

<script>
export default {
  name: 'DogDetailDialog',
  data () {
    return {
      dogDetail: {},
      ownerData: {},
      columns: [
        {
          name: 'detail',
          required: true,
          label: 'ワンちゃんの詳細',
          align: 'center',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'calories',
          align: 'center',
          label: 'Calories',
          field: 'calories',
          sortable: true
        }
      ],
      data: [
        {
          name: '犬種',
          calories: 159
        },
        {
          name: '毛色',
          calories: 159
        },
        {
          name: '年齢',
          calories: 159
        },
        {
          name: '性別',
          calories: 159
        },
        {
          name: '特技',
          calories: 159
        }
      ]
    }
  },
  props: ['dogDetailData'],
  created () {
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
    dogSex () {
      if (this.dogDetailData.sex === 1) {
        return 'text-primary'
      } else {
        return 'text-pink'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.dialog
  box-shadow: none !important
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
