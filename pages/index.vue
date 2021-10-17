<template>
  <div>
    <next-match :user="getUser" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NextMatch from '~/components/Matchs/NextMatch.vue'

export default {
  name: 'Index',
  components: { NextMatch },
  computed: {
    // rajouter les accesseurs dans `computed` avec l'opérateur de décomposition
    ...mapGetters({
      getUser: 'user/getUser'
    })
  }
}
</script>
