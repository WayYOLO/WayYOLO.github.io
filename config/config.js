export default {
  plugins: [
    ['umi-plugin-react', {
      dva: true,
      antd: true,
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
      },
    }],
  ],
  targets: {
    ie: 11,
  },
};
