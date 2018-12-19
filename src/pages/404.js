import React from 'react';
import { Icon } from 'antd';
import { connect } from 'dva';
import styles from './404.less';

export default connect()(() => (
  <div className={styles.error}>
    <Icon type="frown-o" />
    <h1>404 Not Found</h1>
  </div>
));
