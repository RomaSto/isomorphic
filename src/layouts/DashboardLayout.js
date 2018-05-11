// import React from 'react';
// import PropTypes from 'prop-types';
// import { Switch, Redirect } from 'react-router-dom';
// import { AsyncPrivateRoute } from '../layouts/asyncComponents';

// // import Header from 'components/dashboard/DashboardHeader';
// // import Content from 'components/dashboard/DashboardContent';
// // import Nav from '../components/dashboard/Nav';
// // import TabBar from 'components/TabBar';

// const DashboardLayout = ({ history }) => (
//   <span>
//     <div>
//       {
//         //  <Header />
//       }
//       <Switch>
//         <AsyncPrivateRoute exact path="/dashboard/:company" loader={() => import('views/dashboard/Batches')} />
//         <AsyncPrivateRoute exact path="/app/:company/:batch" loader={() => import('views/dashboard/Batch')} />

//         <AsyncPrivateRoute exact path="/app/loans/new" loader={() => import('views/dashboard/Loans/RequestLoan')} />
//         <AsyncPrivateRoute path="/app/loans" loader={() => import('views/dashboard/Loans')} />

//         <Redirect to="/dashboard" />
//       </Switch>
//     </div>
//   </span>
// );

// DashboardLayout.propTypes = {
//   history: PropTypes.object.isRequired,
// };

// export default DashboardLayout;
