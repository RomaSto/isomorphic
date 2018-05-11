import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Grid, Col, Row } from 'react-flexbox-grid';
// import cx from 'classnames';
import TopbarNotification from './topbarNotification';
import appActions from '../../redux/app/actions';
import TopbarUser from './topbarUser';
import TopbarWrapper from './topbar.style';
import themes from '../../settings/themes';
import { themeConfig } from '../../settings';

const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

class Topbar extends Component {
  render() {
    const { toggleCollapsed } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      // position: "fixed",
      width: '100%',
      height: 70,
      padding: '0px',
    };
    const stylingTopBarcontent = {
      // background: customizedTheme.backgroundColor,
      // position: "fixed",
      height: '100%',
      padding: '0px',
      // paddingRight: '30px',
      margin: '0',
      display: 'flex',
      justifyContent: 'flex-end',
    };

    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
        collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
      }
        >
          {
            // style = {{ alignItems: 'flex-end', justifyContent: 'flex-end', display: 'flex' }}
          }
          <Grid >


            <ul style={stylingTopBarcontent} className="isoRight">
              <li >
                <TopbarNotification />
              </li>
              <li
                onClick={() => this.setState({ selectedItem: 'user' })}
                className="isoUser"
              >
                <TopbarUser />
              </li>
            </ul>


          </Grid>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App.toJS(),
  }),
  { toggleCollapsed },
)(Topbar);
