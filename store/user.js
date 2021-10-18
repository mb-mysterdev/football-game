export const state = () => ({
  user: {
    avatar: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
    pseudo: 'B.Momo',
    countryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/langfr-225px-Flag_of_Tunisia.svg.png',
    level: 'Amateur',
    levelPoint: 755,
    popularity: 15,
    year: 2021,
    team: {
      team_name: 'PSG',
      team_logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/2048px-Paris_Saint-Germain_Logo.svg.png',
      team_ranking: 1,
      team_funds: 150000,
      team_supporters: 11000,
      team_staduim_capacity: 12000,
      team_power: 93,
      team_money_value: 250000,
      team_last_match: [0, 1, 2],
      team_division: {
        division_name: 'Ligue 1',
        division_logo: '',
        division_first_color: 'blue',
        division_second_color: '#cefb05',
        division_background: ''
      }
    },
    matches: [
      {
        team_name: 'Rennes',
        team_power: 65,
        team_logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Stade_Rennais_FC.svg/1200px-Stade_Rennais_FC.svg.png',
        team_last_match: [1, 0, 2],
        team_local: 0,
        score_team: null,
        score_team_user: null
      },
      {
        team_name: 'Olympique Lyonnais',
        team_power: 65,
        team_logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/e2/Olympique_lyonnais_%28logo%29.svg/1200px-Olympique_lyonnais_%28logo%29.svg.png',
        team_last_match: [1, 0, 2],
        team_local: 1,
        score_team: null,
        score_team_user: null
      },
      {
        team_name: 'Olympique de Marseille',
        team_power: 75,
        team_logo: 'https://upload.wikimedia.org/wikipedia/fr/archive/4/43/20200407190016%21Logo_Olympique_de_Marseille.svg',
        team_last_match: [1, 2, 2],
        team_local: 0,
        score_team: null,
        score_team_user: null
      },
      {
        team_name: 'AS Monaco',
        team_power: 65,
        team_logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/58/Logo_AS_Monaco_FC_-_2021.svg/langfr-130px-Logo_AS_Monaco_FC_-_2021.svg.png',
        team_last_match: [1, 0, 2],
        team_local: 1,
        score_team: null,
        score_team_user: null
      },
      {
        team_name: 'Stade de Reims',
        team_power: 65,
        team_logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/0/00/Logo_Stade_de_Reims_2020.svg/1200px-Logo_Stade_de_Reims_2020.svg.png',
        team_last_match: [1, 0, 2],
        team_local: 0,
        score_team: null,
        score_team_user: null
      },
      {
        team_name: 'AS Saint Etienne',
        team_power: 65,
        team_logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/AS_Saint-%C3%89tienne_logo.png',
        team_last_match: [1, 0, 2],
        team_local: 1,
        score_team: null,
        score_team_user: null
      },
      {
        team_name: 'LOSC Lille',
        team_power: 65,
        team_logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/Logo_LOSC_Lille_2018.svg/1200px-Logo_LOSC_Lille_2018.svg.png',
        team_last_match: [1, 0, 2],
        team_local: 0,
        score_team: null,
        score_team_user: null
      },
      {
        team_name: 'FC Nantes',
        team_power: 65,
        team_logo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/FC-Nantes-blason-rvb.png',
        team_last_match: [1, 0, 2],
        team_local: 1,
        score_team: null,
        score_team_user: null
      }
    ]
  }
})

export const getters = {
  getUser: (state) => {
    return state.user
  },
  getTeam: (state) => {
    return state.user.team
  },
  getDivision: (state) => {
    return state.user.division
  }
}

export const mutations = {
  update (state, payload) {
    state.user = payload
  }
}
