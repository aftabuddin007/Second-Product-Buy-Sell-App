import { authe } from "@/app/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
// import { auth } from "@/actions/server/auth";
export const { GET, POST } = toNextJsHandler(authe);