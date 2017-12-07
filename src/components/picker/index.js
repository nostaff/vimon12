import Vue from 'vue'
import getInsertPosition from '../../util/getInsertPosition'
import PickerComponent from './picker.vue'

const Picker = Vue.extend(PickerComponent)

// ---------- functions ----------

function PickerFactory (options) {
  let el = getInsertPosition('sheetPortal').appendChild(
    document.createElement('div')
  )
  return new Picker({el, propsData: options})
}

function getPresentDismissIns (Factory) {
  return {
    /**
     * 组件实例
     * @private
     **/
    _ins: null, // instance

    /**
     * 开启
     * @desc
     * 如果上一个实例是开启状态, 则自动关闭后开启新的
     * @param {object} options - 传入参数
     * @return {Promise} - 开启动画结束的promise
     * @private
     **/
    present (options) {
      return new Promise(resolve => {
        if (this._ins && this._ins.isActive) {
          this._ins.dismiss().then(() => {
            this._ins = Factory(options)
            // 自动开启
            this._ins.present().then(() => {
              resolve()
            })
          })
        } else {
          this._ins = Factory(options)
          // 自动开启
          this._ins.present().then(() => {
            resolve()
          })
        }
      })
    },

    /**
     * 关闭
     * @return {Promise} - 关闭动画结束的promise
     * @private
     **/
    dismiss () {
      return new Promise(resolve => {
        if (this._ins && this._ins.isActive) {
          this._ins.dismiss().then(() => {
            resolve()
          })
        } else {
          resolve()
        }
      })
    },
    /**
     * 刷新
     * @private
     **/
    refresh () {
      this._ins && this._ins.refresh()
    },
    /**
     * 列重置
     * @private
     **/
    resetColumn (index) {
      this._ins && this._ins.resetColumn(index)
    }
  }
}

export default getPresentDismissIns(PickerFactory)
