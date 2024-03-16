import {useEffect} from "react";
import {useFonts} from 'expo-font';
import {SplashScreen, Slot} from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded, fontError] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return <Slot />
}
