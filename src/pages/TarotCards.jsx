import React from "react";
import MenuRenderer from "../components/MenuRenderer";
import {Dimensions} from "react-native";
const tarotCards = require("../statics/mockedTarotCardTypes");

//dimensions API
const viewportHeight = Dimensions.get("window").height;
const itemHeight = (viewportHeight-80) / 2; //TODO get viewport height without navbar


class TarotCards extends React.Component {
    render() {
        return (
            <MenuRenderer
                dataList={tarotCards}
                listItemHeight={itemHeight}
                nav={this.props.navigation}
                numColumns={1}
            />
        );
    }
}

export default TarotCards;


