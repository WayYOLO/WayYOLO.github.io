import * as blogService from '../services/blog';

export default {
  namespace: 'blog',
  state: {
    list: [],
    blogLists:[],
  },
  effects:{
    *update( _, { call, put }) {
      const data = yield call(blogService.query);
      if (data) {
        yield put({
          type: 'save',
          payload: {
            list: data.data
          },
        })
      }
    },
    *getBlogLists({payload},{call,put}){
      const data = yield call(blogService.getBlogLists,payload);
      console.log('blogLists:',data.data);
      if(data){
        yield put({
          type:'save',
          payload:{
            blogLists: data.data
          }
        })
      }
    }
  },
  reducers: {
    save(state,action){
      return {...state,...action.payload}
    }
  }
};
