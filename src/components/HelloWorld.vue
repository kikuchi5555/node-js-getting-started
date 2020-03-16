<script>
  // import vue2Dropzone from 'vue2-dropzone'
  // import 'vue2-dropzone/dist/vue2Dropzone.min.css'
  import axios from "axios";
  import { mapState } from 'vuex'

  export default {
    name: 'hello-world',
    // components: {
    //   vueDropzone: vue2Dropzone
    // },
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
      dropzoneOptions: {
        url: `http://localhost:8888/images`,
        method: 'post',
        addRemoveLinks: 'true' // ここに1行追加 !!!
      }
    }),
    computed: {
      ...mapState([
        'count',
      ]),
    },
    mounted () {
      // axios.get('http://localhost:8888/images').then(res => {
      //   res.data.forEach(res => {
      //     // filename 所得
      //     let filename = res.path.replace('http://localhost:8888/', '')
      //     // uuid 所得
      //     let id = filename.replace('.png', '')
      //     // file オブジェクト作成
      //     var file = {size: res.size, name: filename, type: "image/png", upload: {uuid: id}}
      //     // コードからform に画像データをセット
      //     this.$refs.myVueDropzone.manuallyAddFile(file, res.path)
      //   })
      // }).catch(err => {
      //   console.error(err)
      // })
    },
    // methods を追加 formデータとして fileに付けられた任意のuuidを付加
    methods: {
      sendingEvent: function (file, xhr, formData) {
        console.log(xhr)
        formData.append('uuid', file.upload.uuid)
      },
      removeEvent: function (file) {
        axios.delete(`http://localhost:8888/images/${file.upload.uuid}`).then(res => {
          console.log(res.data)
        }).catch(err => {
          console.error(err)
        })
      }
    }
  }
</script>

<template lang="pug">
  v-container
    p
      | カウント： {{ count }}
    //- <!-- sendingEventを追加 -->
    //- vue-dropzone(
    //-   ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"
    //-   v-on:vdropzone-sending="sendingEvent"
    //-   v-on:vdropzone-removed-file="removeEvent"
    //- )
    v-row.text-center
      v-col(cols="12")
        v-img.my-3(
          :src="require('../assets/logo.svg')"
          contain
          height="200"
        )


      v-col.mb-4
        h1.display-2.font-weight-bold.mb-3
          | Welcome to Vuetify

        p.subheading.font-weight-regular
          | For help and collaboration with other Vuetify developers,
          br
          | please join our online
          a(
            href="https://community.vuetifyjs.com"
            target="_blank"
          )
            | Discord Community

      v-col(
        class="mb-5"
        cols="12"
      )
        h2.headline.font-weight-bold.mb-3
          | What's next?

        v-row(justify="center")
          a.subheading.mx-3(
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            target="_blank"
          )
            | {{ next.text }}

      v-col.mb-5(
        cols="12"
      )
        h2.headline.font-weight-bold.mb-3
          | Important Links

        v-row(justify="center")
          a.subheading.mx-3(
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            target="_blank"
          )
            | {{ link.text }}

      v-col.mb-5(
        cols="12"
      )
        h2.headline.font-weight-bold.mb-3
          | Ecosystem

        v-row(justify="center")
          a.subheading.mx-3(
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            target="_blank"
          )
            | {{ eco.text }}
</template>

<style lang="stylus">
#app
  background #fefefe
</style>