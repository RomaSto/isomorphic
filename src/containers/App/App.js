import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import { Debounce } from 'react-throttle';
// import WindowResizeListener from 'react-window-size-listener';
import { ThemeProvider } from 'styled-components';
import authAction from '../../redux/auth/actions';
// import appActions from '../../redux/app/actions';
import Topbar from '../Topbar/Topbar';
import AppRouter from './AppRouter';
import themes from '../../settings/themes';
import { themeConfig } from '../../settings';
import AppHolder from './commonStyle';
import './global.css';

const { Content } = Layout;
const { logout } = authAction;
// const { toggleAll } = appActions;
export class App extends Component {
  render() {
    const { url } = this.props.match;
    // const { height } = this.props;
    return (
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <AppHolder>
          <Layout >
            <Topbar />
            <Grid>
              <Layout>
                <Content >
                  <AppRouter url={url} />
                </Content>
              </Layout>
            </Grid>
          </Layout>
        </AppHolder>
      </ThemeProvider>);
  }
}

export default connect(
  state => ({
    auth: state.Auth,
    // height: state.App.toJS().height,
  }),
  { logout },
)(App);
