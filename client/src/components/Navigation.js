import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Cookies from 'js-cookie';
import { getCurrentUser } from '../modules/account';
import { wsConnect } from '../modules/websocket';

function Navigation({  path, dispatch}) {
  
  useEffect(
    () => {
      if (Cookies.get('token')) {
        dispatch(getCurrentUser());
      }
    },
    [dispatch],
  );
  const uri = "ws://localhost:8765"

  useEffect(() => dispatch(wsConnect(uri)), [dispatch, uri]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-Between',
        padding: '5px 1%',
      }}
    >
      <div>
        <Link to="/">
          <h3 style={{ paddingRight: '5px' }}>Genee</h3>
        </Link>
      </div>
      <div>
        <div style={{ marginRight: '10px', display: 'inline-block' }}>
          {path !== 'about' && (
            <Link to="/about">
              <span>About </span>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}

const s2p = state => ({
  loggedIn: state.auth.loggedIn,
});

Navigation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
  inGame: PropTypes.bool,
};

Navigation.defaultProps = {
  loggedIn: PropTypes.undefined,
  inGame: PropTypes.undefined,
};
export default connect(s2p)(withRouter(Navigation));
