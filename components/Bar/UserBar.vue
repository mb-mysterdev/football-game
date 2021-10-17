<template>
  <div class="col-9">
    <b-navbar toggleable="sm" class="user-bar__navbar">
      <b-img width="40" :src="user.avatar" class="mr-2" />
      <div class="mr-2">
        {{ user.pseudo }}
      </div>
      <b-img width="40" :src="user.countryImage" class="rounded mr-3" />
      <!-- User Level -->
      <div>
        <b-col class="d-flex">
          <b-icon
            class="mx-2"
            icon="bookmark-star-fill"
          />
          <div>{{ user.level }}</div>
        </b-col>
        <b-col class="mr-5">
          <b-progress :max="maxLevelPoints" height="1rem">
            <b-progress-bar
              :value="user.levelPoint"
              variant="success"
              animated
            >
              <span class="d-flex justify-content-center">Semi-pro (<strong>{{ user.levelPoint.toFixed(0) }} / {{ maxLevelPoints.toFixed(0) }}</strong>)</span>
            </b-progress-bar>
          </b-progress>
        </b-col>
      </div>
      <!-- User Popularity -->
      <b-row class="ml-1 col-4">
        <b-col>
          <b-progress :max="maxLevelPoints" height="1rem">
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

<style lang="scss" scoped>
  .user-bar {
    &__navbar{
      background: $blue;
    }
  }
</style>
