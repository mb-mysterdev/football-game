<template>
  <div class="pt-5 mt-5 d-flex justify-content-center">
    <b-row v-for="(match,key) in matches" :key="key" class="mr-5">
      <div
        v-if="match.matchStatus === 'inProgress' && !loading"
      >
        <b-row>
          <b-col>
            <div class="card bg-transparent" style="width: 15rem;">
              <div style="height:14rem;width:14rem" class="d-flex justify-content-center">
                <img :src="getTeam(match.team1).logo" class="card-img-top" style="height:11rem;width:11rem">
              </div>
              <div class="card-body d-flex justify-content-center">
                <h5 class="card-title text-light">
                  {{ getTeam(match.team1).name }}
                </h5>
              </div>
              <div class="d-flex justify-content-center">
                <span v-for="value in user.team.team_last_match" :key="value">
                  <b-avatar v-if="!value" variant="danger" text="P" />
                  <b-avatar v-if="value === 1" variant="warning" text="N" />
                  <b-avatar v-if="value === 2" variant="success" text="V" />
                </span>
              </div>
            </div>
          </b-col>
          <b-col class="white">
            <h3>Next Match</h3>
            <h3>{{ user.team.team_division.division_name }} / S{{ user.week }}</h3>
            <div style="font-size:120px" :style="'color:'+user.team.team_division.division_second_color ">
              VS
            </div>
          </b-col>
          <b-col>
            <div class="card bg-transparent" style="width: 15rem;">
              <div style="height:14rem;width:14rem" class="d-flex justify-content-center">
                <img :src="getTeam(match.team2).logo" class="card-img-top" style="height:11rem;width:11rem">
              </div>
              <div class="card-body">
                <h5 class="card-title text-light">
                  {{ getTeam(match.team2).name }}
                </h5>
              </div>
              <div class="d-flex justify-content-center">
                <span v-for="value in user.team.team_last_match" :key="value">
                  <b-avatar v-if="!value" variant="danger" text="P" />
                  <b-avatar v-if="value === 1" variant="warning" text="N" />
                  <b-avatar v-if="value === 2" variant="success" text="V" />
                </span>
              </div>
            </div>
          </b-col>
        </b-row>
        <div class="d-flex justify-content-center">
          <b-button @click="nextMatch(match,key)">
            NEXT MATCH
          </b-button>
        </div>
      </div>
      <div v-else-if="match.matchStatus === 'inProgress' && loading">
        <b-skeleton-img height="20rem" width="25rem" />
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  middleware: 'test',
  props: {
    user: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      loading: false,
      matches: [
        { team1: 1, team2: 2, matchStatus: 'inProgress' },
        { team1: 2, team2: 1, matchStatus: 'next' }
      ],
      teams: [
        { id: 1, name: 'Paris Saint-Germain', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/1200px-Paris_Saint-Germain_Logo.svg.png' },
        { id: 2, name: 'Olympique lyonnais', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/e2/Olympique_lyonnais_%28logo%29.svg/1200px-Olympique_lyonnais_%28logo%29.svg.png' },
        { id: 2, name: 'Olympique lyonnais', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/e2/Olympique_lyonnais_%28logo%29.svg/1200px-Olympique_lyonnais_%28logo%29.svg.png' }
      ]
    }
  },
  methods: {
    getTeam (matchTeam) {
      return this.teams.find(element => element.id === matchTeam)
    },
    nextMatch (match, key) {
      setTimeout(function () {
        this.loading = true

        match.matchStatus = 'done'
        this.matches[key + 1].matchStatus = 'inProgress'
      }.bind(this), 1500)
      setTimeout(function () {
        this.loading = false
      }.bind(this), 3000)
    }
  }
}
</script>
