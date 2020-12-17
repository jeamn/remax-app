import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './index.css';

export default class App extends React.Component {
  componentDidMount() {
    console.log(process.env.NODE_ENV)
  };
  render(){
    return (
      <View className={styles.app}>
        <View className={styles.header}>
          <Image
            src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
            className={styles.logo}
            alt="logo"
          />
          <View className={styles.text}>
            当前环境：{process.env.HOTEL_APP_ENV}
          </View>
        </View>
      </View>
    );
  }
};
