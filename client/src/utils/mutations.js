import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation newUser($username: String!, $email: String!, $password: String!) {
    newUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          authors
          bookId
          image
          link
          title
          description
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: SaveBook!) {
    saveBook(input: $input) {
      _id
      username
      bookCount
      savedBooks {
        _id
        title
        description
        link
        image
        authors
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
        _id
        title
        description
        link
        image
        authors
      }
    }
  }
`;
