<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-img :src="user.avatar" />
      <div>{{ user.pseudo }}</div>
      <b-img :src="user.countryImage" />
      <!-- User Level -->
      <b-row>
        <b-col class="d-flex justify-content-center">
          <b-icon
            icon="bookmark-star-fill"
          />{{ user.level }}
        </b-col>
        <b-col>
          <b-progress :max="maxLevelPoints" height="2rem">
            <b-progress-bar
              :value="user.levelPoint"
              variant="success"
              animated
            >
              <span>Semi-pro (<strong>{{ user.levelPoint.toFixed(0) }} / {{ maxLevelPoints.toFixed(0) }}</strong>)</span>
            </b-progress-bar>
          </b-progress>
        </b-col>
      </b-row>
      <!-- User Popularity -->
      <b-row>
        <b-col>
          <b-progress :max="maxLevelPoints" height="2rem">
            <b-progress-bar
              :value="user.levelPoint"
              variant="success"
              animated
            >
              <span>
                <b-icon
                  icon="star-half"
                />(<strong>{{ user.popularity.toFixed(0) }} / {{ maxPopularity.toFixed(0) }}</strong>)</span>
            </b-progress-bar>
          </b-progress>
        </b-col>
      </b-row>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      maxLevelPoints: 1000,
      maxPopularity: 100
    }
  }
}
</script>

<style>

</style>
