import config from 'config'
import { mapGetters } from 'vuex'

export default {
  name: 'ContentfulEntries',
  props: {
    limit: {
      type: [Number, String],
      default: 10
    },
    content_type: {
      type: String,
      default: config.contentful.defaultContentType // default for project,
    }
  },
  computed: {
    ...mapGetters({
      entries: 'contentful/entries'
    })
  },
  // Server-side only
  // this will be called by the server renderer automatically (vue 2.6+)
  serverPrefetch () {
    return this.fetchEntries() // works
  },
  // Client-side only
  mounted () {
    if (typeof this.entries === 'undefined' || this.entries.length === 0) {
      this.fetchEntries()
    }
  },
  methods: {
    fetchEntries () { // works
      return this.$store.dispatch('contentful/list', { limit: this.limit, content_type: this.content_type })
    }
  }
}
