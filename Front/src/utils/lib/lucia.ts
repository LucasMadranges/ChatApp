import {Lucia, TimeSpan} from "lucia";
import {PrismaAdapter} from "@lucia-auth/adapter-prisma";
import {PrismaClient} from "@prisma/client";

const client = new PrismaClient();

const adapter = new PrismaAdapter(client.session, client.user);

export const lucia = new Lucia(adapter, {
    sessionExpiresIn: new TimeSpan(1, "d"), // 2 weeks
});

export default lucia;