export const state = () => ({
  user: {
    avatar: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
    pseudo: 'B.Momo',
    countryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/langfr-225px-Flag_of_Tunisia.svg.png',
    level: 'Amateur',
    levelPoint: 755,
    popularity: 15
  }
})

export const getters = {
  getUser: (state) => {
    return state.user
  }
}
