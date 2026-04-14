import { db } from "../db";

export const createContext = ({ request }: { request: Request }) => ({
  db,
  // Add auth/user info from request headers here
  request,
});

export type Context = ReturnType<typeof createContext>;
