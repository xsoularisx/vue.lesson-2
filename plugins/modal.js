export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true;

        Vue.prototype.$modal = {
            EventEmitter: new Vue,

            show(name) {
                this.EventEmitter.$emit('show', name)
            },

            hide(name) {
                this.EventEmitter.$emit('hide', name)
            }
        }
    }
}