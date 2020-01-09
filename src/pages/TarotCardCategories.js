import React from "react";
import MenuRenderer from "../components/MenuRenderer";
import {Dimensions} from "react-native";
const tarotCardCategories = require("../statics/mockedTarotCardTypes");

//dimensions API
const viewportHeight = Dimensions.get("window").height;
const itemHeight = (viewportHeight-80) / 2; //TODO get viewport height without navbar


class TarotCardCategories extends React.Component {
    render() {
        return (
            <MenuRenderer
                dataList={tarotCardCategories}
                listItemHeight={itemHeight}
                nav={this.props.navigation}
            />
        );
    }
}

export default TarotCardCategories;


