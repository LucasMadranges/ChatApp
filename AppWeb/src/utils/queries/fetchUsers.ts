import {gql} from "@apollo/client";

export const FETCH_USERS = gql`
    query fetchUsers {
        getUsers {
            id
            firstname
            lastname
            description
            imgProfile
        }
    }
`;