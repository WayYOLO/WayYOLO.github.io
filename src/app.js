//配置Dva
export const dva = {
  config: {
    onError(e) {
      e.preventDefault();
      console.error(e.message);
    },
  },
  ...(process.env.NODE_ENV !== 'production'
    ? {
        plugins: [
          require('dva-logger')()
        ],
      }
    : {}),
};
