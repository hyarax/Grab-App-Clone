import React from 'react';
import {View} from 'react-native';
import PromoItemsSub from './PromotItemsSub';

const PromoItems = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      <PromoItemsSub
        image={{
          uri:
            'https://www.nibble.id/wp-content/uploads/2019/10/02-@herlin.lay_.jpg',
        }}
        text="Ayam Geprek Mang Juned"
        diskon="Diskon 40%"
      />
      <PromoItemsSub
        image={{
          uri:
            'https://cdn-u1-gnfi.imgix.net/post/large-543defb8b5718-86712ff11c99c09cb60453869a030596.jpg?w=1200&max-h=630&fit=crop&crop=face&mark-align=right&mark-scale=15&mark-pad=40&mark64=aHR0cHM6Ly93d3cuZ29vZG5ld3Nmcm9taW5kb25lc2lhLmlkL2Fzc2V0cy9mcm9udDIwMTkvaW1hZ2VzL3Jlc3RvcmluZy1pbmRvbmVzaWFuYS5wbmc',
        }}
        text="Sate Ayam di Panggang"
        diskon="Diskon 60%"
      />
      <PromoItemsSub
        image={{
          uri:
            'https://media.suara.com/pictures/480x260/2016/08/22/o_1aqp4qkuvs2s1rp71b7a8jap5sa.jpg',
        }}
        text="Mie Ayam Mang Garox"
        diskon="Diskon 20%"
      />
      <PromoItemsSub
        image={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuL-TBmfweEomZtWZqfE-xqiGhmW60zAa4lQ&usqp=CAU',
        }}
        text="Martabak Bang Jago"
        diskon="Diskon 50%"
      />
    </View>
  );
};

export default PromoItems;
