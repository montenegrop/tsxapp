import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "someApp",
  webDir: "build",
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId:
        "519338495248-726fk8ucg1dpaec3os07p9qjf396d697.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
