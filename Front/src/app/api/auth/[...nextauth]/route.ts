import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {LoginDB} from "@/utils/lib/loginDB";

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
                if (credentials?.email || credentials?.password || credentials?.confirmPassword) {
                    try {
                        return await LoginDB(credentials.email, credentials.password, credentials.confirmPassword);
                    } catch (error: any) {
                        throw new Error(error);
                    }
                }
            },
        }),
    ],
    callbacks: {
        async jwt({token, user}: any) {
            if (user) {
                token.firstname = user.firstname;
                token.lastname = user.lastname;
                token.email = user.email;
                token.role = user.role;
            }
            return token;
        },
        async session({session, token}: any) {
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