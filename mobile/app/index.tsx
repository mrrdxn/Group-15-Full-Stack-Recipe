import { Redirect } from "expo-router";
import { useAuth } from "@clerk/expo";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return <LoadingSpinner />;

  if (isSignedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/sign-in" />;
}