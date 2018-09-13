<template>
  <v-card-media
    :src="$store.getters['auth/userImage']"
    height="300px"
  >
    <v-layout
      column
      fill-height
    >
      <v-card-title>
        <v-btn color="primary" dark icon @click="$router.go(-1)">
          <v-icon>chevron_left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn color="primary" dark icon class="mr-3" @click="$emit('open-profile-edit')">
          <v-icon>edit</v-icon>
        </v-btn>

        <v-menu bottom left>
          <v-btn color="primary" dark icon slot="activator">
            <v-icon>more_vert</v-icon>
          </v-btn>

          <v-list>
            <v-list-tile @click="openFilestack">
              <v-list-tile-title>Change Profile Image</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-card-title>
    </v-layout>
  </v-card-media>
</template>

<script>
  import * as filestack from 'filestack-js';
  import axios from 'axios'

  export default {
    data() {
      return {
        client: null
      }
    },

    created() {
      this.client = filestack.init(process.env.filestackAPI_KEY);
    },

    computed: {
      user() {
        return this.$store.getters['auth/user']
      }
    },

    methods: {
      openFilestack: function () {
        // File stack options
        const options = {
          maxFiles: 1,
          uploadInBackground: false,
          "accept": [
            "image/*"
          ],
          onUploadDone: (res) => {
            // update the database with new avatar url
            this.updateAvatarUrl(res)
          },
        };

        this.client.picker(options).open();
      },

      updateAvatarUrl: async function (res) {
        const { data } = await axios.post('/user/avatar', { avatar: res.filesUploaded[0].url })

        if (data) {
          this.$store.dispatch('auth/updateUser', { user: data })
        }
      }
    }
  }
</script>