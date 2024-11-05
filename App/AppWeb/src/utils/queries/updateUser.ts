import {gql} from "@apollo/client";

export const UPDATE_USER = gql`
    mutation updateUser($id: String!, $lastname: String!, $firstname: String!, $description: String!, $email: String!, $password: String!, $role: String!, $imgProfile: String!) {
        updateUser(
            id: $id,
            lastname: $lastname,
            firstname: $firstname,
            description: $description,
            email: $email,
            password: $password,
            role: $role,
            imgProfile: $imgProfile
        ) {
            id
            firstname
            lastname
            email
            role
            imgProfile
        }
    }
`;