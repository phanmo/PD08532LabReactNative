import React from "react";
import { Image, ImageBackground, StatusBar, Text, View } from "react-native";
import { styles } from "./styles";
import SmallBtn from "../../../components/SmallBtn";
import { shouldUseActivityState } from "react-native-screens";

const Lab5_3 = () => {
    return (
        <ImageBackground
            style={styles.container}
            source={require('../../../assets/images/bgr_hoian.jpeg')}
        >
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"></StatusBar>
            <View style={styles.bgr}>
                <View style={styles.menuView}>
                    <Image style={styles.menuIcon} source={require('../../../assets/icons/back.png')}/>
                    <Image style={styles.menuIcon} source={require('../../../assets/icons/menu.png')}/>
                </View>
                <View style={styles.nameView}>
                <Text style= {styles.name}>PHỐ CỔ HỘI AN</Text>
                <View style={styles.starView}>
                    <Image style={styles.star} source={require('../../../assets/icons/star.png')} />
                    <Text style={styles.starText}>5.0</Text>
                </View>
                </View>
            </View>
            <View style={styles.heartcontainer}>
                <Image style={styles.hearticon} source={require('../../../assets/icons/heart.png')} />
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.locationView}>
                    <Image style={styles.locationIcon} source={require('../../../assets/icons/location.png')}></Image>
                    <Text style={styles.locationText}>Quảng Nam</Text>
                </View>
                <Text style={styles.inforTitle}>Thông tin chuyến đi</Text>
                <Text style={styles.inforHoiAn}>Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành phố Đà Nẵng khoảng 30 km về phía Nam. Nhờ những yếu tố địa lý và khí hậu thuận lợi, Hội An từng là một thương cảng quốc tế sầm uất, nơi gặp gỡ của những thuyền buôn Nhật Bản, Trung Quốc và phương Tây trong suốt thế kỷ XVII và XVIII.</Text>
                <View style={styles.footer}>
                    <View style={styles.footerText}>
                        <Text style={styles.footerPrice}>$100</Text>
                        <Text style={styles.footerTime}>/Ngày</Text>
                    </View>
                    <SmallBtn bgColor='#fff' textColor='blue' btnLabel='Đặt ngay'></SmallBtn>
                </View>
            </View>

        </ImageBackground>
    );
};
export default Lab5_3;
