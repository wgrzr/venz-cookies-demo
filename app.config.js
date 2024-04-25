module.exports = {
  expo: {
    name: "Cookies Demo",
    slug: "cookies-demo",
    version: "1.0.0",
    extra: {
      doordashDeveloperId: process.env.DOORDASH_DEVELOPER_ID,
      doordashKeyId: process.env.DOORDASH_KEY_ID,
      doordashSigningSecret: process.env.DOORDASH_SIGNING_SECRET,
      supabaseUrl: process.env.SUPABASE_URL,
      supabasePublicAnonKey: process.env.SUPABASE_PUBLIC_ANON_KEY,
      supabaseServiceRole: process.env.SUPABASE_SERVICE_ROLE,
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "demo",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.willfromspace.cookiesdemo",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.willfromspace.cookiesdemo",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router", "expo-secure-store"],
    experiments: {
      typedRoutes: true,
    },
  },
};
