import config from 'config'
import { mapGetters } from 'vuex'

export default {
  name: 'ContentfulEntry',
  props: {
    by: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    content_type: {
      type: String,
      default: config.contentful.defaultContentType
    }
  },
  computed: {
    ...mapGetters({
      items: 'contentful/getCurrentEntry'
    }),
    slug () {
      return this.$route.params.slug ? this.$route.params.slug : null
    }
  },
  // Server-side only
  // this will be called by the server renderer automatically (vue 2.6+)
  serverPrefetch () {
    return this.fetchEntry()
  },
  // Client-side only
  mounted () {
    console.log('entry.js mounted')
    if (typeof this.items === 'undefined' || this.items.length === 0) {
      this.fetchEntry()
    }
  },
  methods: {
    fetchEntry () {
      return this.$store.dispatch('contentful/entry', { by: this.by, id: this.id, slug: this.slug, content_type: this.content_type })
    }
  }
}
