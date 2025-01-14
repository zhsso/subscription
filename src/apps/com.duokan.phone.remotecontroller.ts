import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.duokan.phone.remotecontroller',
  name: `万能遥控`,
  groups: [
    {
      key: 0,
      name: '底部横幅广告',
      activityIds:
        'com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2',
      rules:
        'ImageView[id=`com.duokan.phone.remotecontroller:id/image_close_banner`]',
    },
  ],
};
