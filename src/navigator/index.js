import React, { useEffect } from 'react';
import { Text, Image, View, BackHandler } from 'react-native';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';

import { AsyncComponent } from '@/components';
import { config, pxToDp } from '@/tools';

/*****程序页面*****/
// 启动页面
const launchScreens = {
	// Launch: { component: AsyncComponent(() => import('../screens/common/launch')), options: { headerShown: false } },
}
// 弹窗页面
const modalScreens = {
}
// 通用页面
const commonScreens = {
	Text: { component: AsyncComponent(() => import('../screens/test')), options: { title: '测试' } }
}
// 底部菜单栏
const tabs = {
	Activity: { component: AsyncComponent(() => import('../screens/test')), options: { tabBarLabel: '测试' }, icon: '', icon_sel: '' }
}
/****************/

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Screen = (name, component, options = {}) => {
	useEffect(() => {

	}, []);

	return <Stack.Screen key={name} name={name} component={component} options={{ ...config.screenOptions, ...options }} />
}

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
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarStyle: { backgroundColor: '#ffffff', borderTopWidth: 0 },
				tabBarActiveTintColor: '#FC1E1E',
				tabBarInactiveTintColor: '#999',
				tabBarVisible: false
			})}
		>
			{
				Object.entries(tabs).map(([name, objects]) => (
					<Tab.Screen key={name} name={name} component={objects.component} options={{
						tabBarIcon: ({ focused }) => (
							<View style={{ position: 'relative' }}>
								<Image
									style={{ width: pxToDp(38), height: pxToDp(38) }}
									source={focused ? objects.icon_sel : objects.icon}
								/>
							</View>
						),
						tabBarLabelStyle: { top: pxToDp(-10) },
						...config.screenOptions,
						...(objects.options || {})
					}} />
				))
			}
		</Tab.Navigator>
	);
}

const Navigators = () => {
	return (
		<Stack.Navigator initialRouteName='Launch' screenOptions={config.screenOptions}>
			<Stack.Group>
				{
					Object.entries(launchScreens).map(([name, objects]) => (
						Screen(name, objects.component, objects.options)
					))
				}
			</Stack.Group>
			<Stack.Group>
				{
					Object.entries(commonScreens).map(([name, objects]) => (
						Screen(name, objects.component, objects.options)
					))
				}
			</Stack.Group>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				{
					Object.entries(modalScreens).map(([name, objects]) => (
						Screen(name, objects.component, objects.options)
					))
				}
			</Stack.Group>
			<Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
				{Screen('Tab', TabStack, { headerShown: false })}
			</Stack.Group>
		</Stack.Navigator>
	)
}

export default Navigators;