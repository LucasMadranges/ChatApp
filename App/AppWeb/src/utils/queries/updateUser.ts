import {gql} from "@apollo/client";

export const UPDATE_USER = gql`
    mutation updateUser($id: Float!, $lastname: String!, $firstname: String!, $description: String!, $imgProfile: String!) {
        updateUser(
            id: $id,
            lastname: $lastname,
            firstname: $firstname,
            description: $description,
            imgProfile: $imgProfile
        ) {
            id
            firstname
            lastname
            description
            imgProfile
        }
    }
`;