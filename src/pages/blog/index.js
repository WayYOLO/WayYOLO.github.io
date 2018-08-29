import React,{Component} from "react";
import { connect } from "dva";
import styles from "./index.less";
import { Button } from "antd";
class Blog extends Component {
  componentDidMount() {
    this.props.dispatch({
      type:'blog/update'
    })
    this.props.dispatch({
      type:'blog/getBlogLists',
      payload:{
        filter:'created'
      }
    })
  }
  render() {
    return(
      <div>
        <div>
          {this.props.pageData.list.login}
        </div>
        <Button
          type='primary'
        >
          刷新
        </Button>
      </div>
    )
  }
}
export default connect(state => {
  return {
    pageData: state.blog
  };
})(Blog);
