import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';
import { Text, Image, View, BackHandler } from 'react-native';

/*****程序页面*****/
// 底部菜单栏
import TestStack from '../navigator/stack/test';
import config from '../tools/config';
/****************/

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabStack = (props) => {
	const dispatch = useDispatch();
	const { navigation } = props;

	function useExitOnBack() {
		useFocusEffect(
			React.useCallback(() => {
				const handleBackPress = () => {
					BackHandler.exitApp();
					return true;
				};
				BackHandler.addEventListener('hardwareBackPress', handleBackPress);
				return () =>
					BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
			}, []),
		);
	}

	useExitOnBack();

	useEffect(() => {
	}, []);

	return (
		<Tab.Navigator tabBarOptions={{ style: { backgroundColor: '#ffffff' } }} screenOptions={({ route }) => ({
			tabBarVisible: false
		})}>
			<Tab.Screen name="Test" component={TestStack} />
		</Tab.Navigator>
	);
}

const Navigators = () => {
	return (
		<Stack.Navigator initialRouteName='Tab' screenOptions={config.screenOptions}>
			<Stack.Screen name="Tab" component={TabStack} options={{ headerShown: false }} />
		</Stack.Navigator>
	)
}

export default Navigators;