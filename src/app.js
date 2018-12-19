import logger  from 'dva-logger';

// 配置Dva
const dva = {
  config: {
    onError(e) {
      e.preventDefault();
      console.error(e.message);
    },
  },
  ...(process.env.NODE_ENV !== 'production'
    ? {
        plugins: [logger()],
      }
    : {}),
};
export default dva;
