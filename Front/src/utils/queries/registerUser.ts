import {gql} from "@apollo/client";

export const REGISTER_USER = gql`
    mutation registerUser($lastname: String!, $firstname: String!, $email: String!, $password: String!, $confirmPassword: String!) {
        registerUser(
            lastname: $lastname,
            firstname: $firstname,
            email: $email,
            password: $password,
            confirmPassword: $confirmPassword
        ) {
            firstname
            lastname
            email
            role
        }
    }
`;