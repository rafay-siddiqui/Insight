// @flow

import React from 'react';

function WriteNewTweet() {
  return (
    <div className="twt-area">
      <form action="#" method="post">
        <textarea
          className="form-control"
          name="profile-tweet"
          placeholder="Share something on Twitter.."
          rows="3"
        />
        <div className="clearfix">
          <button className="btn btn-sm btn-primary pull-right" type="submit">
            <i className="fa fa-twitter" />
            Tweet
          </button>
          <a
            className="btn btn-link btn-icon fa fa-location-arrow"
            data-original-title="Add Location"
            data-placement="bottom"
            data-toggle="tooltip"
            href="#"
            style={{ textDecoration: 'none' }}
            title=""
          />
          <a
            className="btn btn-link btn-icon fa fa-camera"
            data-original-title="Add Photo"
            data-placement="bottom"
            data-toggle="tooltip"
            href="#"
            style={{ textDecoration: 'none' }}
            title=""
          />
        </div>
      </form>
    </div>
  );
}

WriteNewTweet.displayName = 'WriteNewTweet';

export default WriteNewTweet;
