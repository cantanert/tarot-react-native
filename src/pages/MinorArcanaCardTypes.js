import React from "react";
import {Dimensions, View} from "react-native";
import MenuRenderer from "../components/MenuRenderer";
import minorArcanaCardTypes from "../statics/mockedMinorArcanaCardTypesData"
import statics from "../statics/enumStatics";


const viewportHeight = Dimensions.get("window").height;
const itemHeight = (viewportHeight-80) / 4; //TODO get viewport height without navbar

class MinorArcanaCardTypes extends React.Component{
    render() {
        return(
            <MenuRenderer
                dataList={minorArcanaCardTypes.sampleData}
                listItemHeight={itemHeight}
                nav={this.props.navigation}
                numColumns={1}
            />
        );
    }
}

export default MinorArcanaCardTypes;