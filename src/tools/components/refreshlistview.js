import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import RefreshControl from './refreshcontrol';

export const RefreshState = {
    Idle: 0,//空闲中
    HeaderRefreshing: 1,//下拉刷新中
    FooterRefreshing: 2,//上拉刷新中
    NoMoreData: 3,//没有更多数据
    Failure: 4,//数据获取失败
};

class RefreshListView extends PureComponent {

    onHeaderRefresh = () => {
        if (this.props.refreshState == RefreshState.HeaderRefreshing ||
            this.props.refreshState == RefreshState.FooterRefreshing) {
            return
        }

        this.props.onHeaderRefresh && console.log('下拉获取数据中');
        this.props.onHeaderRefresh && this.props.onHeaderRefresh(RefreshState.HeaderRefreshing);
    };

    onEndReached = (info) => {
        console.log(`距离底部${info.distanceFromEnd}`);

        let { refreshState, data } = this.props;
        if (data.length == 0) {
            return
        }

        refreshState == RefreshState.Idle && this.props.onFooterRefresh && console.log('上拉获取数据中');
        refreshState == RefreshState.Idle && this.props.onFooterRefresh && this.props.onFooterRefresh(RefreshState.FooterRefreshing);
    };

    renderFooter = () => {
        let footer = null;

        let {
            data,
            refreshState,
            footerRefreshingText,
            footerFailureText,
            footerNoMoreDataText,
            footerRefreshingComponent,
            footerFailureComponent,
            footerNoMoreDataComponent
        } = this.props;

        switch (refreshState) {
            case RefreshState.Idle:
                footer = (<View style={styles.footerContainer} />);
                break;
            case RefreshState.Failure: {
                footer = (
                    <TouchableOpacity onPress={() => {
                        if (data.length == 0) {
                            this.props.onHeaderRefresh && this.props.onHeaderRefresh(RefreshState.HeaderRefreshing)
                        } else {
                            this.props.onFooterRefresh && this.props.onFooterRefresh(RefreshState.FooterRefreshing)
                        }
                    }}
                    >
                        {footerFailureComponent ? footerFailureComponent : (
                            <View style={styles.footerContainer}>
                                <Text style={styles.footerText}>{footerFailureText}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                );
                break
            }
            case RefreshState.FooterRefreshing: {
                footer = footerRefreshingComponent ? footerRefreshingComponent : (
                    <View style={styles.footerContainer} >
                        <ActivityIndicator size='small' color='#8c8c8c' />
                        <Text style={[styles.footerText, { marginLeft: 8 }]}>{footerRefreshingText}</Text>
                    </View>
                );
                break
            }
            case RefreshState.NoMoreData: {
                footer = footerNoMoreDataComponent ? footerNoMoreDataComponent : (
                    <View style={styles.footerContainer} >
                        <Text style={styles.footerText}>{footerNoMoreDataText}</Text>
                    </View>
                );
                break
            }
        }

        return footer
    };

    render() {
        let { renderItem, data, refreshState, onHeaderRefresh } = this.props;

        return (
            <FlatList
                ref={this.props.listRef}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={0.1}
                ListFooterComponent={this.renderFooter}
                refreshControl={onHeaderRefresh &&
                    <RefreshControl
                        refreshing={refreshState == RefreshState.HeaderRefreshing}
                        onRefresh={this.onHeaderRefresh}
                    />
                }
                renderItem={renderItem}
                data={data}
                {...this.props}
            />
        )
    }
}

RefreshListView.defaultProps = {
    footerRefreshingText: '数据加载中...',
    footerFailureText: '点击重新加载',
    footerNoMoreDataText: '没有更多数据了',
    data: [],
    refreshState: RefreshState.Idle
};

RefreshListView.propTypes = {
    refreshState: PropTypes.number,
    onHeaderRefresh: PropTypes.func,
    onFooterRefresh: PropTypes.func,
    data: PropTypes.array,
    listRef: PropTypes.any,
    footerRefreshingText: PropTypes.string,
    footerFailureText: PropTypes.string,
    footerNoMoreDataText: PropTypes.string,
    footerRefreshingComponent: PropTypes.any,
    footerFailureComponent: PropTypes.any,
    footerNoMoreDataComponent: PropTypes.any,
    renderItem: PropTypes.func
};

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 44,
    },
    footerText: {
        fontSize: 14,
        fontWeight: '100',
        color: '#595959'
    }
});

export default RefreshListView