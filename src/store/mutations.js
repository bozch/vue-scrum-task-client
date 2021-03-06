import * as types from './mutation-types'

export default {
  //获取后设置VuexTaskStages
  [types.SET_TASK_STAGES](state, res) {
    state.taskStages = [
      ...res
    ];
  },
  //设置项目Vuex
  [types.SET_PROJECT](state, project) {
    state.project = project;
  },
  //添加TaskStages
  [types.ADD_TASK_STAGES](state, stage) {
    state.taskStages.push(stage);
  },
  [types.REMOVE_STAGE](state, stage) {
    let stages = [];
    state.taskStages.forEach((s) => {
      if (s._id != stage._id) {
        stages.push(s);
      }
    });
    state.taskStages = [...stages];
  },
  [types.UPDATE_STAGE](state, stage) {
    state.taskStages.forEach((s) => {
      if (s._id == stage._id) {
        s.name = stage.name;
      }
    });
  },
  [types.SET_USER_PROFILE](state, user) {
    state.user = user;
  },
  [types.CHANGE_APP_LOADING](state, isLoading) {
    state.appLoading = isLoading
  },
  [types.SET_LOGIN_STATUS](state, status) {
    state.loginStatus = status;
  },
  [types.SET_ACCESS_TOKEN](state, at) {
    state.accessToken = at;
  },
  [types.SET_PROJECT_POSTS](state, posts) {
    state.posts = posts;
  },
  [types.SET_DEFAULT_FOLDER](state, folder) {
    state.folder = folder;
  },
  [types.SET_ALL_PROJECT](state, projects) {
    state.projects = [...projects];
  },
  [types.SET_ALL_TEAMS](state, teams) {
    state.teams = [...teams];
  },
}
