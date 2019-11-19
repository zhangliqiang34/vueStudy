import Message from './message.vue'

console.log('====================================');
console.log(Message);
console.log('====================================');
export default {
    install(Vue, options) {
        const VueMsg = Vue.extend(Message)
        let vm = null;
        const ShowMessage = ({ message, type, time = 2000 }) => {
            if (!vm) {
                vm = new VueMsg();
                vm.$mount();
                document.querySelector('body').appendChild(vm.$el);
            } else {
                vm.hide();
                clearTimeout(ShowMessage.timer)
            }
            vm.message = message;
            vm.type = type
            vm.show();

            ShowMessage.timer = setTimeout(() => {
                vm.hide();
            }, time)
        }
        Vue.Message = Vue.prototype.$message = ShowMessage

    }
}