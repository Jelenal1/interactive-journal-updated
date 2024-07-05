import { Pedometer } from "expo-sensors";
import { Platform } from "react-native";
import googleFit, { Scopes } from "react-native-google-fit";

export const getStepsOfRange = async (start, end) => {
  // Teilweise von ChatGPT generiert
  if (Platform.OS === "ios") {
    if (!Pedometer.isAvailableAsync()) {
      throw new Error("Pedometer is not available on this device");
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    const result = await Pedometer.getStepCountAsync(startDate, endDate);
    return result.steps;
  } else if (Platform.OS === "android") {
    const options = {
      scopes: [Scopes.FITNESS_ACTIVITY_READ, Scopes.FITNESS_ACTIVITY_WRITE],
    };

    const authorized = await googleFit.authorize(options);

    if (authorized.success) {
      const startDate = new Date(start).toISOString();
      const endDate = new Date(end).toISOString();

      const dailySteps = await googleFit.getDailyStepCountSamples({
        startDate,
        endDate,
      });

      if (dailySteps.length > 0) {
        const steps = dailySteps
          .filter(
            (ds) => ds.source === "com.google.android.gms:estimated_steps",
          )
          .map((ds) => ds.steps)
          .flat()
          .reduce((acc, val) => acc + val.value, 0);

        return steps;
      }
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};