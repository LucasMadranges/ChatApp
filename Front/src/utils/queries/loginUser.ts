import {gql} from "@apollo/client";

export const LOGIN_USER = gql`
    query LoginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            firstname
            lastname
            email
        }
    }
`;