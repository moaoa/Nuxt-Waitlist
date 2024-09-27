import { useDrizzle } from "~/server/utils/drizzle";
import { consola } from "consola";
import { waitlist } from "../database/schema";

function anonymize(item: { email: string }) {
  return item.email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2");
}

export default defineEventHandler(async (event) => {
  consola.info("User trying to signup for waitlist...");

  consola.info("User joining waitlist...");

  const entry = (
    await useDrizzle().select({ email: waitlist.email }).from(tables.waitlist)
  ).map(anonymize);

  return entry;
});
