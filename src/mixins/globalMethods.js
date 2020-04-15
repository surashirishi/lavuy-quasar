export default {    // exportする
  // created() {
  // },

  // data() {
  //     return {
  //         serverPass: "https://localhost:10443/",    // サーバーサイドのパスを定義
  //     }
  // },

  // methods: {
  //     logging() {
  //     }
  // },

  methods: {
      dogSex(sex) {
        if (sex === 1) {
          return 'text-primary'
        } else {
          return 'text-pink'
        }
      }
  }
}
