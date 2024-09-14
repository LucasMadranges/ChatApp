import {gql} from "@apollo/client";

export const LOGIN_USER = gql`
    query LoginUser($email: String!, $password: String!, $confirmPassword: String!) {
        loginUser(email: $email, password: $password, confirmPassword: $confirmPassword) {
            user {
                id
                firstname
                lastname
                description
                email
                role
            }
            token
        }
    }
`;