import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.handsgo.jiakao.android',
  groups: [
    {
      key: 0,
      name: '驾考宝典-开屏广告',
      activityIds: 'com.handsgo.jiakao.android.splash.Login',
      rules: '[id=`com.handsgo.jiakao.android:id/closeLayout`]',
    },
  ],
};