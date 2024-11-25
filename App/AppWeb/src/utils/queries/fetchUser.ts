import {gql} from "@apollo/client";

export const FETCH_USER = gql`
    query fetchUserById($id: Float!) {
        getUserById(id: $id) {
            id
            firstname
            lastname
            description
            imgProfile
        }
    }
`;