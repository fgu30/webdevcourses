import React, { Component } from 'react'

import http from '../../utils/http'

import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native'

import styles from './style_detail'

interface State {
  detail: any
}

interface Props {
  
}

export default class Detail extends Component<Props, State> {
  state: State = {
    detail: {}
  }

  async componentDidMount() {
    let result = await http({
      url: 'https://maguangzhao.cn/public/api/dianping/getDetail',
      method: 'GET'
    })
    this.setState({
      detail: result.data
    })
  }

  render() {
    let d = this.state.detail
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{uri: d.img}}
            style={styles.mainImg}
          ></Image>
          <View style={styles.mainInfo}>
            <View>
              <Text style={styles.mainInfoName}>{d.name}</Text>
            </View>
            <View>
              <Text style={styles.mainInfoSubTitle}>{d.all_click}浏览/{d.favorites}收藏</Text>
            </View>
            <TouchableOpacity
              onPress={() => Alert.alert('收藏成功.')}
            >
              <View style={styles.mainInfoButtonWrap}>
                <Text style={styles.mainInfoButton}>收藏</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.infoWrap}>
            <View>
              <Text style={styles.infoTitle}>心得</Text>
            </View>
            <View>
              <Text style={styles.infoText}>{d.info}</Text>
            </View>

            <View>
              <Text style={styles.infoTitle}>做法</Text>
            </View>
            {
              d.makes && d.makes.map((v: any) => {
                return (
                  <View
                    key={v.num}
                  >
                    <View>
                      <Text style={styles.makesTitle}>
                        {v.num} {v.info}
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={{uri: v.img}}
                        style={styles.makesImg}
                      ></Image>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View>
      </ScrollView>
    )
  }
}
