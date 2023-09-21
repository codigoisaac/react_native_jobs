import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome
} from "../components";
import { COLORS, icons, images, SIZES } from "../constants";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" />
          )
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() =>
              searchTerm ? router.push(`search/${searchTerm}`) : {}
            }
          />

          <Popularjobs />

          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
