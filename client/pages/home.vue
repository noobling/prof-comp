<template>
  <v-layout row wrap>
    <v-flex md4 sm6 xs12 v-for="item in navItems" :key="item.title" @click="cardClick(item)">
      <v-hover>
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="card" :to="item.link">
          <v-container text-xs-center>
            <v-icon color="primary" class="icon">{{ item.icon }}</v-icon>
            <v-card-text class="pt-0">
              <h3 class="title mt-0 mb-4">{{ item.title }}</h3>
              <p color="gray">{{ item.description }}</p>
            </v-card-text>
          </v-container>

        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    created() {
      if (this.$store.getters['auth/user'].type === 'Researcher') {
        this.addPatientsNavLink()
      }
    },

    data() {
      return {
        navItems: [{
            title: 'Sleep Journal',
            description: 'All your sleep records in one place',
            link: '/sleeprecord/user/' + this.$store.getters['auth/user'].id,
            icon: 'book',
          },
          {
            title: 'New Sleep Record',
            description: 'Create a new sleep record',
            link: '/sleeprecord/create',
            icon: 'create',
          },
          {
            title: 'Invite',
            description: 'Invite a patient',
            link: '#',
            icon: 'send',
          },
          {
            title: 'Visualisations',
            description: 'Visualise your sleep journal',
            link: '#',
            icon: 'timeline'
          },
          {
            title: 'Settings',
            description: 'Change your settings',
            link: '/settings',
            icon: 'settings'
          }
        ]
      }
    },

    methods: {
      cardClick(item) {
        if (item.title === 'Invite') {
          this.$store.state.inviteDialog = true
        }
      },
      addPatientsNavLink() {
        this.navItems.unshift({
          title: 'Patient\'s Journal',
          description: 'The sleep journals of your patients',
          link: '/sleeprecord/researcher',
          icon: 'people'
        })
      }
    }
  }
</script>

<style scoped>
  .card {
    margin: 10px
  }

  .icon {
    font-size: 40px;
  }
</style>