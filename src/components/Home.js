import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { Header } from 'react-native-elements';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPictureList } from '../actions';
import PictureCard from './PictureCard';

const styles = {
    paddingView: {
        paddingBottom: 80
    }
};

class Home extends Component {
    componentWillMount() {
        this.props.getPictureList();
        
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ pictList }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(pictList);
        this.dataSource._dataBlob.s1 = this.dataSource._dataBlob.s1.reverse()
    }

    renderRow = (pict) => {
        return <PictureCard pict={pict} navigation={this.props.navigation}/>
    }

    render() {
        const {paddingView} = styles;
        return (
            <View style={paddingView}>
                <Header
                    placement="left"
                    centerComponent={{ text: 'Home', style: { color: '#fff' }}}
                />
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const pictList = _.map(state.pictList, (val, uid) => {
        return { ...val, uid };
    });

    return { pictList };
}

export default connect(mapStateToProps, { getPictureList })(Home);