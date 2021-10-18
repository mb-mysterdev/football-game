<template>
  <div class="pt-5 mt-5 d-flex justify-content-center">
    <b-row class="mr-5">
      <div
        v-if="!loading && getNextMatch !== null"
      >
        <b-row>
          <b-col>
            <div class="card bg-transparent" style="width: 15rem;">
              <div style="height:14rem;width:14rem" class="d-flex justify-content-center">
                <img :src="user.team.team_logo" class="card-img-top" style="height:11rem;width:11rem">
              </div>
              <div v-if="showResult !== null" class="d-flex justify-content-center">
                {{ showResult.score_team_user }}
              </div>
              <div class="card-body d-flex justify-content-center">
                <h5 class="card-title text-light">
                  {{ user.team.team_name }}
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
            <h3>{{ user.team.team_division.division_name }} / S 1</h3>
            <div style="font-size:120px" :style="'color:'+user.team.team_division.division_second_color ">
              VS
            </div>
          </b-col>
          <b-col>
            <div class="card bg-transparent" style="width: 15rem;">
              <div style="height:14rem;width:14rem" class="d-flex justify-content-center">
                <img :src="getNextMatch.team_logo" class="card-img-top" style="height:11rem;width:11rem">
              </div>
              <div v-if="showResult !== null" class="d-flex justify-content-center">
                {{ showResult.score_team }}
              </div>
              <div class="card-body d-flex justify-content-center">
                <h5 class="card-title text-light">
                  {{ getNextMatch.team_name }}
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
          <b-button v-if="showResult === null" @click="playMatch(getNextMatch)">
            Play Match
          </b-button>
          <b-button v-else @click="showResult = null">
            Next Match
          </b-button>
        </div>
      </div>
      <div v-else-if="loading">
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
      localUser: {},
      showResult: null
    }
  },
  computed: {
    getNextMatch () {
      if (this.showResult !== null) {
        return this.localUser.matches.find(match => match.team_name === this.showResult.team_name)
      }
      if (this.localUser.matches !== undefined) {
        return this.localUser.matches.find(match => match.score_team_user === null)
      }
      return null
    }
  },
  mounted () {
    this.localUser = JSON.parse(JSON.stringify(this.user))
  },
  methods: {
    async playMatch () {
      this.loading = true
      this.localUser.matches.find(match => match.team_name === this.getNextMatch.team_name)
      const foundIndex = this.localUser.matches.findIndex(match => match.team_name === this.getNextMatch.team_name)
      this.localUser.matches[foundIndex].score_team_user = Math.round(Math.random() * 6)
      this.localUser.matches[foundIndex].score_team = Math.round(Math.random() * 5)
      await new Promise(resolve => setTimeout(resolve, 500))
      this.loading = false
      this.showResult = this.localUser.matches[foundIndex]
    }
  }
}
</script>
