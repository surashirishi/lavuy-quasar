<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-red-3">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          OneWalk 犬の散歩代行サービス
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-red-3">
      <q-toolbar>
        <q-toolbar-title>運営元：Urayasai</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

const baseUrl = 'http://localhost:8080'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: '散歩相手を探す',
          icon: 'pets',
          link: `${baseUrl}`
        },
        {
          title: '散歩をお願いする？',
          icon: 'touch_app',
          link: `${baseUrl}/#/request`
        },
        {
          title: 'お気に入り',
          icon: 'favorite',
          link: `${baseUrl}/#/favorite`
        },
        {
          title: '予約状況',
          icon: 'bookmarks',
          link: `${baseUrl}/#/reservation`
        },
        {
          title: 'アカウント情報',
          icon: 'account_box',
          link: `${baseUrl}/#/account`
        }
      ]
    }
  }
}
</script>
