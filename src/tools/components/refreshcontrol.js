import React from 'react';
import { RefreshControl } from 'react-native';

class RefreshControlElement extends React.Component {
    render() {
        return (
            <RefreshControl
                colors={this.props.colors}
                tintColor={this.props.tintColor}
                title={this.props.title}
                titleColor={this.props.titleColor}
                {...this.props}
            />
        )
    }
}

RefreshControlElement.defaultProps = {
    colors: ['#1890ff', '#f5222d'],
    tintColor: {},
    title: '加载中...',
    titleColor: '#8c8c8c'
};

export default RefreshControlElement;