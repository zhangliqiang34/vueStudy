import Message from './messages.vue'

export default {
    install(Vue, options) {
        const VueMsg = Vue.extend(Message)
        let vm = null;
        const ShowMessage = ({ message, type, time = 2000 }) => {
            vm = new VueMsg();
            vm.$mount()
            document.querySelector('body').appendChild(vm.$el)

            vm.message = message;
            vm.type = type
            vm.show();

            setTimeout(() => {
                vm.hide();
            }, time)
        }
        Vue.Message = Vue.prototype.$message = ShowMessage
    }
}