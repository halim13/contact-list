import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import store from './src/app-redux/store/configureStore'
import colors from './src/constants/colors'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...colors,
    },
}

export default function Main() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <App />
            </PaperProvider>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main)
