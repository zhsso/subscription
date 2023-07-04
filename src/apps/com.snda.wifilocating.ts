import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.snda.wifilocating',
  groups: [
    {
      key: 0,
      name: 'WiFi万能钥匙-内部广告',
      activityIds: 'com.lantern.launcher.ui.MainActivityICS',
      rules: [
        {
          matches: [
            '[id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`为什么看到此广告`]',
            '@[id=`com.snda.wifilocating:id/outer_ad_dislike_item_one`] [id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`不感兴趣`]',
          ],
        },
        'ImageView[id=`com.snda.wifilocating:id/feed_item_sdk_logo`] < LinearLayout + [id=`com.snda.wifilocating:id/feed_item_dislike`]',
      ],
    },
  ],
};