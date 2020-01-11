import React from "react";
import {Dimensions, View} from "react-native";
import MenuRenderer from "../components/MenuRenderer";
import minorArcanaCards from "../statics/mockedMinorArcanaData"

const viewportHeight = Dimensions.get("window").height;
const itemHeight = (viewportHeight-80) / 4; //TODO get viewport height without navbar

class Minor extends React.Component{
    render() {
        return(
            <MenuRenderer
                dataList={minorArcanaCards.sampleData}
                listItemHeight={itemHeight}
                nav={this.props.navigation}
                numColumns={1}
            />
        );
    }
}

export default Minor;