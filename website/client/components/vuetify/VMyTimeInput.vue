
<script>
  import { VInput } from 'Vuetify'

  export default {
    name: 'v-my-time-input',

    extends: VInput,

    methods: {
      genDefaultSlot () {
        return this.$createElement('input', {
          staticClass: 'v-my-time-input',
          attrs: {
            type: 'time'
          }
        })
      }
    }
  }
</script>