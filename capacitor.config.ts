import { CapacitorConfig } from "@capacitor/cli";
import { googleClientId } from "./loginAPI";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "someApp",
  webDir: "build",
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      clientId: googleClientId,
      grantOfflineAccess: true,
    },
  },
};

export default config;
