<template>
  <div class="text-white">
    <b-row class="justify-content-center">
      <user-bar :user="getUser" />
      <team-bar :team="getTeam" />
    </b-row>
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TeamBar from '~/components/Bar/TeamBar.vue'
import UserBar from '~/components/Bar/UserBar.vue'

export default {
  components: { UserBar, TeamBar },
  computed: {
    // rajouter les accesseurs dans `computed` avec l'opérateur de décomposition
    ...mapGetters({
      getUser: 'user/getUser',
      getTeam: 'user/getTeam'
    })
  }
}

</script>

<style>
body  {
    background-image: url('https://www.ligue1.fr/-/media/Project/LFP/Ligue1/Images/Articles-Assests/2020/07/08/2021-calendrier-L1UE-desktop.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
html {
    height: 100%;
}
</style>
