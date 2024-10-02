import Head from "@/components/default-head.jsx";
import config from "vike-solid/config";
import type { Config } from "vike/types";

// Default config (can be overridden by pages)
export default {
  Head,
  title: "Vike vs NextJS experiment.",
  extends: [config],
} satisfies Config;
