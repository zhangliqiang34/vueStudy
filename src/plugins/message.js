import Message from "./messages.vue";

export default {
    install(Vue) {
        const VueMsg = Vue.extend(Message);
        let vm = null;
        vm = new VueMsg();
        vm.$mount();
        document.body.appendChild(vm.$el);

        let timer;
        // const ShowMessage = ({ message, type, time = 2000 }) => {
        //     vm.message = message;
        //     vm.type = type;
        //     vm.show();

        //     setTimeout(() => {
        //         // vm.hide();
        //         vm.show();
        //     }, time);
        // };
        // Vue.Message = Vue.prototype.$message = ShowMessage;
        // Vue.prototype.$message = ShowMessage;

        const ShowMessage = {
            all_message(message, type, duration) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    vm.hide();
                }, duration);
                vm.message = message;
                vm.type = type;
                vm.show();
            },
            success(message, type, duration = 2000) {
                this.all_message(message, type, duration);
            },
            error(message, type, duration = 2000) {
                this.all_message(message, type, duration);
            }
        };
        //将方法挂载全局
        Vue.prototype.$message = ShowMessage;
    }
};