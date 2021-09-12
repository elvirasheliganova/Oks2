/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';

import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabTwoScreen';
import TabFourScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps, HomeParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import CourseDetailScreen from '../screens/CourseDetailScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={
          ({ navigation }: RootTabScreenProps<'Home'>) => ({
            headerShown: false,
            tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={24} />,
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}>

              </Pressable>
            ),
          })}
      />
      <BottomTab.Screen
        name="Coming_soon"
        component={TabTwoScreen}
        options={{

          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabThreeScreen}
        options={{

          tabBarIcon: ({ color }) => <Ionicons name="search" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="Download"
        component={TabFourScreen}
        options={{

          tabBarIcon: ({ color }) => <AntDesign name="download" color={color} size={24} />,
        }}
      />

    </BottomTab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="CourseScreen"
        //component={HomeScreen}
        component={CourseDetailScreen}
        options={{
          title: ''
        }} />
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }} />
    </HomeStack.Navigator>
  )
}
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
//function TabBarIcon(props: {
  //name: React.ComponentProps<typeof FontAwesome>['name'];
  //color: string;
//})
// {
  //return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
//}
