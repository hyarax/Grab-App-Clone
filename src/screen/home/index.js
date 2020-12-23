import React from 'react';
import OvoComponent from '../home/OvoComponent';
import ContentHome from '../home/ContentHome';
import HeaderHomeBanner from '../home/HeaderHomeBanner';
import MainFeatureOvo from '../home/MainFeatureOvo';
import PromoItems from '../home/PromotItems';
import GlobalStyle from '../home/GlobalStyle';
import {View, ScrollView} from 'react-native';

const Home = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      <View>
        <ScrollView>
          <HeaderHomeBanner />
          <OvoComponent />
          <View style={{marginHorizontal: 18}}>
            <MainFeatureOvo />
          </View>
          <GlobalStyle />
          <PromoItems />
          <ContentHome />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
