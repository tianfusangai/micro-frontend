import {registryApp, start} from "./framework";
import apps from "./apps.json";

registryApp(apps, {
    beforeLoad() {
        console.log("framework ---> 开始加载子应用")
    },
    mounted() {
        console.log("framework ---> 子应用挂载完成")
    },
    destroyed() {
        console.log("framework ---> 卸载完成")
    }
});

start()

