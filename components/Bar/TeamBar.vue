<template>
  <div class="col-8">
    <b-navbar toggleable="sm" class="rounded-1 team-bar__navbar justify-content-center">
      <b-row>
        <b-col class="d-flex p-0 px-2">
          <b-img
            :src="team.team_logo"
            style="width:28px;height:30px"
            class="mr-1"
          />
          <div> {{ team.team_name }}</div>
        </b-col>
        /
        <b-col class="d-flex p-0 px-2">
          <b-img
            style="width:28px;height:30px"
            class="mr-1"
            src="http://simpleicon.com/wp-content/uploads/cup.png"
          />
          <div>{{ team.team_ranking }}</div>
        </b-col>
        /
        <b-col class="d-flex p-0 px-2">
          <b-icon
            style="width:28px;height:30px"
            class="mr-1"
            icon="cash"
          />
          <div>{{ team.team_funds }}</div>
        </b-col>
        /
        <b-col class="d-flex p-0 px-2">
          <b-icon
            style="width:28px;height:30px"
            class="mr-1"
            icon="people-fill"
          />
          <div>
            {{ team.team_supporters }}
          </div>
        </b-col>
        /
        <b-col class="d-flex p-0 px-2">
          <b-img
            src="https://cdn-icons-png.flaticon.com/512/88/88961.png"
            style="width:28px;height:30px"
            class="mr-1"
          />
          <div>
            {{ team.team_staduim_capacity }}
          </div>
        </b-col>
        /
        <b-col class="d-flex p-0 px-2">
          <b-img
            src="https://cdn-icons-png.flaticon.com/512/88/88961.png"
            style="width:28px;height:30px"
            class="mr-1"
          />
          <div> {{ team.team_power }}</div>
        </b-col>
        /
        <b-col class="d-flex p-0 px-2">
          <b-icon
            style="width:28px;height:30px"
            class="mr-1"
            icon="lightning"
          />
          <div>{{ team.team_money_value }}</div>
        </b-col>
      </b-row>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .team-bar {
    &__navbar{
      background: $blue-1;
    }
  }
</style>
