import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
// import styles from './index.less';

class Blog extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'blog/update',
    });
    dispatch({
      type: 'blog/getBlogLists',
      payload: {
        filter: 'created',
      },
    });
  }

  render() {
    const { pageData } = this.props;
    return (
      <div>
        <div>{pageData.list.login}</div>
        <Button type="primary">刷新</Button>
      </div>
    );
  }
}
export default connect(state => ({
  pageData: state.blog,
}))(Blog);
