import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../presentation/components/Layout";
import Loading from "../presentation/components/Loading";
import Header from "../presentation/components/Layout/Header";
import Footer from "../presentation/components/Layout/Footer";

//lazy loading
const LandingPage = lazy(() => import("../presentation/pages/LandingPage"));
const LoginPage = lazy(() => import("../presentation/pages/Auth/LoginPage"));
const SignupPage = lazy(() => import("../presentation/pages/Auth/SignupPage"));
const ErrorPage = lazy(() => import("../presentation/pages/Error"));
//Dashboard lazy loading
const DashboardLandingPage = lazy(() =>
  import("../presentation/pages/Dashboard/LandingPage")
);
const DashboardHeader = lazy(() =>
  import("../presentation/components/Layout/Dashboard/Header")
);
const DashboardSider = lazy(() =>
  import("../presentation/components/Layout/Dashboard/Sider")
);
const DashboardCalendarPage = lazy(() =>
  import("../presentation/pages/Dashboard/CalendarPage")
);
const DashboardStatisticsPage = lazy(() =>
  import("../presentation/pages/Dashboard/StatisticsPage")
);

const DashboardSettingsPage = lazy(() =>
  import("../presentation/pages/Dashboard/SettingsPage")
);

const User = ({ match }) => (
  <Layout>
    <DashboardHeader />
    <Layout>
      <Suspense fallback={<Loading fullHeight type="dashboard" />}>
        <DashboardSider />
        <Switch>
          <Route path={`${match.url}`} component={DashboardLandingPage} exact />
          <Route
            path={`${match.url}/calendar`}
            component={DashboardCalendarPage}
            exact
          />
          <Route
            path={`${match.url}/statistics`}
            component={DashboardStatisticsPage}
            exact
          />
          <Route
            path={`${match.url}/settings`}
            component={DashboardSettingsPage}
            exact
          />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </Layout>
  </Layout>
);

const Visitor = ({ match }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Layout>
      <Header />
      <Suspense fallback={<Loading fullHeight type="landing" />}>
        <Switch>
          <Route path={`${match.url}`} component={LandingPage} exact />
          <Route path={`${match.url}login`} component={LoginPage} exact />
          <Route path={`${match.url}signup`} component={SignupPage} exact />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
      <Footer />
    </Layout>
  );
};

//routes
const Routes = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading fullHeight type="landing" />}>
          <Switch>
            <Route path="/dashboard" component={User} />
            <Route path="/" component={Visitor} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default Routes;
