import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const uiHeight = 640;

export default function px2dp(px) {
    return px * deviceHeight / uiHeight;
}