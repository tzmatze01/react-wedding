import { SessionData } from "./types";

export const hasRole = (sessionData: SessionData, role: string): boolean => {
  return sessionData.roles.includes(role);
};

export const hasAnyRole = (sessionData: SessionData, roles: string[]): boolean => {
  return roles.some((role) => sessionData.roles.includes(role));
};
