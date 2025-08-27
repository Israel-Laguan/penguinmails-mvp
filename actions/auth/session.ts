import { getServerSession } from "next-auth";
import { config as authOptions } from "@/lib/auth";
import { ERROR_CODES } from "@/lib/responses/errors";
import { CODES_SUCCESS } from "@/lib/responses/success";

export const isUserAllowed = async (allowedRoles?: string[]) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return { success: false, data: ERROR_CODES.UNAUTHORIZED };
  }

  if (allowedRoles && !allowedRoles.includes(session.user.role)) {
    return { success: false, data: ERROR_CODES.FORBIDDEN };
  }

  return { success: true, data: CODES_SUCCESS.ACCEPTED};
};
