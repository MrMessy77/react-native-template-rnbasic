import { Toast, Portal } from '@ant-design/react-native';

const show = (content, type = 'loading', duration = 0, onClose = null, mask = true) => {
    return Toast[type](content, duration, onClose, mask);
};

const hide = (key) => {
    Portal.remove(key);
};

export default { show, hide }
