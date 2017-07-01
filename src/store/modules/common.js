import * as types from '../mutation-types'

/**
 * App通用配置
 */
const state = {
    isLoading: false,
    direction: 'forward',
    leftNavStatus: false,
    showSuccess: true,
	showFail: false,
    toastMsg: '操作成功',
    showTimePicker: false,
    alertMsg: '退出登录',
    showAlert: false
}

const actions = {
    updateLoadingStatus({ commit }, status) {
        commit(types.COM_LOADING_STATUS, status)
    },
    updateDirection (state, direction) {
        state.direction = direction
    },
    setNavState({ commit }, status) {
        commit(types.COM_NAV_STATUS, status)
    },
    showAlert({ commit }, status) {
        commit(types.COM_SHOW_ALERT, status)
    },
    alertMsg({ commit }, str) {
        commit(types.COM_ALERT_MSG, str)
    },
    showTimePicker({ commit }, status) {
        commit(types.COM_SHOW_TIME_PICKER, status)
    },
}

const getters = {
    isLoading: state => state.isLoading,
    direction: state => state.direction,
    showAlert: state => state.showAlert,
}


const mutations = {
    [types.COM_LOADING_STATUS](state, status) {
        state.isLoading = status
    },

    [types.COM_UPDATE_DIRECTION] (state, direction) {
        state.direction = direction
    },

    [types.COM_NAV_STATUS](state, status) {
        state.leftNavStatus = status
    },

    [types.COM_SHOW_TIME_PICKER](state, status) {
        state.showTimePicker = status
    },

    [types.COM_SHOW_ALERT](state, status) {
        state.showAlert = status
    },
    [types.COM_ALERT_MSG](state, str) {
        state.alertMsg = str
    },
}


export default {
    state,
    actions,
    getters,
    mutations
}