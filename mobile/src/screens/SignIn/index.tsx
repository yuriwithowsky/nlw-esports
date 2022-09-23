import { Image, FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";

import { styles } from "./styles";
import { Background } from "../../components/Background";
import { GameController } from "phosphor-react-native";
import { THEME } from "../../theme";
import * as AuthSession from "expo-auth-session";

export function SignIn() {
  async function handleDiscordSignIn() {
    const response = await AuthSession.startAsync({
      authUrl:
        "https://discord.com/api/oauth2/authorize?client_id=1022676443676807310&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40yuriwithowsky%2Fmobile&response_type=token&scope=identify",
    });

    fetch("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${response.params.access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log(response);
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading title="Entrar" subtitle="Encontre seu duo e bora jogar." />
        <TouchableOpacity style={styles.button} onPress={handleDiscordSignIn}>
          <GameController color={THEME.COLORS.TEXT} size={20} />
          <Text style={styles.buttonTitle}>Entrar com Discord</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}
