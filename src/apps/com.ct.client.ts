import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.ct.client',
  name: `中国电信`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.ct.client.activity.MainActivity',
        'com.ct.client.activity.SplashActivity',
      ],
      rules: '[id=`com.ct.client:id/tvSkip`]',
    },
  ],
};
