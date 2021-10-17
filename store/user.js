export const state = () => ({
  user: {
    avatar: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
    pseudo: 'B.Momo',
    countryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/langfr-225px-Flag_of_Tunisia.svg.png',
    level: 'Amateur',
    levelPoint: 755,
    popularity: 15,
    team: {
      team_name: 'PSG',
      team_logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/2048px-Paris_Saint-Germain_Logo.svg.png',
      team_ranking: 1,
      team_funds: 150000,
      team_supporters: 11000,
      team_staduim_capacity: 12000,
      team_power: 93,
      team_money_value: 250000
    }
  }
})

export const getters = {
  getUser: (state) => {
    return state.user
  },
  getTeam: (state) => {
    return state.user.team
  }
}
