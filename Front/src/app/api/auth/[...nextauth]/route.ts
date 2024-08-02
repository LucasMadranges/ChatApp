import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {LoginDB} from "@/utils/lib/loginDB";
import {User} from "@/utils/models/User";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "email", type: "email"},
                password: {label: "password", type: "password"},
                confirmPassword: {label: "confirm-password", type: "password"},
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password || !credentials?.confirmPassword) {
                    throw new Error("Missing credentials");
                }
                try {
                    const user: User = await LoginDB(credentials.email, credentials.password, credentials.confirmPassword);
                    return user;
                } catch (error) {
                    console.error("Authorize error:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({token, user}: { token: any, user: User }) {
            if (user) {
                token.firstname = user.firstname;
                token.lastname = user.lastname;
                token.email = user.email;
                token.role = user.role;
            }
            return token;
        },
        async session({session, token}: { session: any, token: User }) {
            if (token) {
                session.user.firstname = token.firstname;
                session.user.lastname = token.lastname;
                session.user.email = token.email;
                session.user.role = token.role;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/signin",
    },
});

export {handler as GET, handler as POST};

