import { Plugins } from './global';
import { mergeWebPlugins, mergeWebPlugin } from './web/index';
export * from './web/browser';
export * from './web/camera';
export * from './web/clipboard';
export * from './web/geolocation';
export * from './web/device';
export * from './web/share';
export * from './web/modals';
export * from './web/motion';
export * from './web/storage';
export * from './web/toast';
mergeWebPlugins(Plugins);
export var registerWebPlugin = function (plugin) {
    mergeWebPlugin(Plugins, plugin);
};
//# sourceMappingURL=web-plugins.js.map