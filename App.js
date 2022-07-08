import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpenses from "./screens/ManageExpenses";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { GlobalStyles } from "./constants/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconButton from "./components/UI/IconButton";
import ExpenseContextProvider from "./store/expensesContext";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesTabs() {
  const navigation = useNavigation();
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: GlobalStyles.colors.secondry200,
        tabBarLabelStyle: { fontSize: 18 },
        tabBarActiveTintColor: GlobalStyles.colors.primary100,
        headerTitleStyle: { fontSize: 28 },
        headerStyle: {
          borderLeftWidth: 5,
          borderLeftColor: GlobalStyles.colors.primary100,
          backgroundColor: GlobalStyles.colors.secondry200,
        },
        headerTintColor: GlobalStyles.colors.primary100,
        tabBarStyle: {
          height: "7%",
          backgroundColor: GlobalStyles.colors.secondry100,
          borderBottomWidth: 2,
          borderBottomColor: GlobalStyles.colors.primary100,
          borderRightWidth: 2,
          borderRightColor: GlobalStyles.colors.primary100,
          borderLeftWidth: 2,
          borderLeftColor: GlobalStyles.colors.primary100,
        },
        headerRight: () => (
          <IconButton
            name="add"
            color={GlobalStyles.colors.lifont200}
            size={30}
            onPress={() => {
              navigation.navigate("ManageExpenses");
            }}
          />
        ),
      }}
    >
      <BottomTabs.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Recent Expenses"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="return-up-back-outline" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{}}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
              options={{
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.secondry200,
                },
                headerTintColor: GlobalStyles.colors.primary100,
                headerTitleStyle: {
                  fontSize: 28,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}
