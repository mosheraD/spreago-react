import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  ApolloClient   from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


// const client = new ApolloClient({
//     uri: 'https://graphql.spreago.com/graphql',
//     request: async (operation) => {
//         const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIxZTA3Mjg4ZTUyZjZkMjcyZmI4OTY1MWFhMzUyMWUxMmI3OTI5ZTcyYWVjYjkzZDBmZTg3ZGIxMmY1YmI1ZTU4M2RkNzdiZTY3N2RhMTk0In0.eyJhdWQiOiI0IiwianRpIjoiYjFlMDcyODhlNTJmNmQyNzJmYjg5NjUxYWEzNTIxZTEyYjc5MjllNzJhZWNiOTNkMGZlODdkYjEyZjViYjVlNTgzZGQ3N2JlNjc3ZGExOTQiLCJpYXQiOjE1NzUzNTkxNDIsIm5iZiI6MTU3NTM1OTE0MiwiZXhwIjoxNjA2OTgxNTQyLCJzdWIiOiIxNDMiLCJzY29wZXMiOltdfQ.jEuiPfCGkn5foo0wHZuv6sly2AF3s2gfzKLUBL6neQdO4Gux55DFrUnny4gogN8EjFMddqqrkPRaOgwHBX6Rcnpu-TEe-xPHnn17k7oJ0orkFqrWgVDq0laOt0EBwIqPZab8Nne_G53YlLUKLsZLRLDNO9t0PnvN0cf_kXJEGsSMB29bemc13wwuDabCg9WP2t-LiLexJrqUlR4alZ44oicC3lOB1lItfhqR4aiRJ6_6jMxcflRbh0wBuxXSTVhdz4uQ1hoGsC_WYJO0m8cbRsx7gSWuO08LT2cXErcTGdqJU0y6GD1DS4IiXLp8uZ6MmDm9kB2WIKo77PfPKnRBEe04p3Ye17bQkO-0jdqbsm501hCVxDSyVe_o4DKTkFmjqE9to7kXHRPRMgqH8gHESVld6OPbmoMnYXESwAYxwBcaGLB2oLLp_UuC9g3BDwZORdXyGoiiCpLmLJgaL8aBQeWB3MB6ZxK7faaawadN48e4PzTECJiYBxdd2TeguJL_rjk0_JqXzD_6j2zmKd5dqAc74aEOWC-KCtNAZl-fhoxbYSLqeqVosjvnbO9IXaROc0kygKCJbvuhWQVWkSKr1G2aI8iCpvW64Kokw1KOhcO8SQn6SMjV5vDfT6VnlLOHo72Dl22xZYI5H0VSum8Pcv67aHxqlKRrkEhnbAXe2vI"
//       operation.setContext({
//         headers: {
//             authorization: token ? `Bearer ${token}` : ""
//         }
//       });
//     }
//   })
const client = new ApolloClient({
    uri: 'https://graphql.spreago.com/graphql',
  });


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
