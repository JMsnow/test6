import jsPay from './pay'

const plugin = {
  install (Vue, options) {
    Vue.component(jsPay.name, jsPay)
  }
}

export default plugin
