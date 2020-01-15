import React from 'react';
import {Dimensions} from 'react-native';
import MenuRenderer from "../components/MenuRenderer";
const articles = require("../statics/mockedArticleData");

const viewportHeight = Dimensions.get("window").height;
const itemHeight = viewportHeight / 4;

class Articles extends React.Component {
    render() {
        return (
            <MenuRenderer
                dataList={articles}
                listItemHeight={itemHeight}
                nav={this.props.navigation}
                numColumns={1}
            />
        );
    }
}

export default Articles;