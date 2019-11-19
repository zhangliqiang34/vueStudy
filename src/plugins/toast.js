import ToastComponent from "./message1.vue";
const Toast = {};

// 注册Toast
Toast.install = function(Vue) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const ToastConstructor = Vue.extend(ToastComponent);
    // 生成一个该子类的实例
    const instance = new ToastConstructor();
    // 将这个实例挂载在我创建的div上
    instance.$mount(document.createElement("div"));
    // instance.$mount();
    // 并将此div加入全局挂载点内部
    document.body.appendChild(instance.$el);
    //定义一个外部的变量，用于控制调用多次提示组件时，清除延时器
    let timer;
    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法
    const message_main = {
        all_message(msg, type, duration) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                instance.visible = false;
            }, duration);
            instance.message = msg;
            instance.visible = true;
            instance.type = type;
        },
        success(msg, duration = 2000) {
            this.all_message(msg, 1, duration);
        },
        error(msg, duration = 2000) {
            this.all_message(msg, 2, duration);
        }
    };
    //将方法挂载全局
    Vue.prototype.$myToast = message_main;
};

export default Toast;