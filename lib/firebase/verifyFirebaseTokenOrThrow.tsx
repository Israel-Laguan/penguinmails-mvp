import admin from "@/lib/firebase/firebase-server";
import { ERROR_CODES } from "../responses/errors";

export async function verifyFirebaseTokenOrThrow(idToken?: string) {
  if (!idToken) {
    console.error(ERROR_CODES.UNAUTHORIZED.message);
    return { ...ERROR_CODES.UNAUTHORIZED, error: true };
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    if (decodedToken?.role !== "ADMIN") {
      console.error(ERROR_CODES.FORBIDDEN.message);
      return { ...ERROR_CODES.FORBIDDEN, error: true };
    }

    return decodedToken;
  } catch (error: any) {
    console.error("Error verifying token:", error);

    if (error.code?.startsWith("auth/")) {
      return {
        code: ERROR_CODES.UNAUTHORIZED.code,
        message: `Invalid token: ${error.code}`,
        error: true,
      };
    }

    return {
      ...ERROR_CODES.BAD_REQUEST,
      message: "Error processing token.",
      error: true,
    };
  }
}
