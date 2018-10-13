import { WebPlugin } from './index';
import { ToastPlugin, ToastShowOptions } from '../core-plugin-definitions';
export declare class ToastPluginWeb extends WebPlugin implements ToastPlugin {
    constructor();
    show(options: ToastShowOptions): Promise<any>;
}
declare const Toast: ToastPluginWeb;
export { Toast };
