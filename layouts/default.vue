<template>
  <div>
    <user-bar />
    <team-bar />
    <Nuxt />
  </div>
</template>

<script>
import TeamBar from '~/components/Bar/TeamBar.vue'
import UserBar from '~/components/Bar/UserBar.vue'
export default {
  components: { UserBar, TeamBar }
}
</script>
<style>
body {
    background-image: url('https://www.ligue1.fr/-/media/Project/LFP/Ligue1/Images/Articles-Assests/2020/07/08/2021-calendrier-L1UE-desktop.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
html {
    height: 100%;
}
</style>
