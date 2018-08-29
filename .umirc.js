export default {
  plugins: [
    ['umi-plugin-react',
      {
        dva:true,
        antd:true,
      },
    ],
    [
    'umi-plugin-routes',
      {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
    ],
  ],
};
