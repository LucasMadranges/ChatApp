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
                        return LoginDB(credentials.email, credentials.password, credentials.confirmPassword);
                    } catch (error) {
                        console.log(error);
                        return null;
                    }
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        newUser: "/chats",
    },
});

export {handler as GET, handler as POST};

/*
*                 const query = `{
                loginUser(email: "theotime@theotime.fr", password: "theotimetheotime") {
                        firstname
                        lastname
                        email
                    }
                }`;
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({query}),
                };

                const request = new Request("http://localhost:4000/graphql", options);
                console.log(request);
* */