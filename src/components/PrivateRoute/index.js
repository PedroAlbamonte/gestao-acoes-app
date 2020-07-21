// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import * as AuthService from '../../services/AuthService'
import { Redirect, Route } from 'react-router-dom'

// const PrivateRoute = ({ component: Component, ...rest }) => {

//   var isLoggedIn = false;
//   const promise = AuthService.isLoggedIn().then( (response) => {
//     console.log(`response Promise = ${response} `);
//     isLoggedIn = response
//     console.log(`isLoggedIn PromiseAll = ${isLoggedIn} `);
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           isLoggedIn ? (
//             <Component {...props} />
//           ) : (
//             <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//           )
//         }
//       />
//     )
//   })
// }

class PrivateRoute extends React.Component {
  state = {
    loading: true,
    isAuthenticated: false,
  }

  componentDidMount() {
    AuthService.isLoggedIn().then((isAuthenticated) => {
      console.log(`isLoggedIn Promise = ${isAuthenticated} `);
      this.setState({
        loading: false,
        isAuthenticated,
      });
    });
  }
  render() {
    const { component: Component, ...rest } = this.props;
    if (this.state.loading) {
      return <div>LOADING</div>;
    } else {
      return (
        <Route {...rest} render={props => (
          <div>
            {!this.state.isAuthenticated && <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />}
            <Component {...this.props} />
          </div>
          )}
        />
      )
    }
  }
}

export default PrivateRoute;