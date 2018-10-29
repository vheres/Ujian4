import React, { Component } from 'react';
import { View, Clipboard } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { CardSection, Button, Input } from './common';
import { logoutUser, pictureUpdate, pictureCreate } from '../actions';

class Profile extends Component {
    logOut = () => {
        this.props.logoutUser();
        this.props.screenProps.rootNavigation.navigate('Login');
    }

    onImageChange = (text) => {
        this.props.pictureUpdate('image', text);
    }

    onCaptionChange = (text) => {
        this.props.pictureUpdate('caption', text);
    }

    onPostClick = () => {
        const { image, caption } = this.props;

        this.props.pictureCreate(this.props.user.email, image, caption)
    }

    readFromClipboard = async () => {   
        const clipboardContent = await Clipboard.getString();   
        this.props.pictureUpdate('image', clipboardContent)
      };

    render() {
        return (
            <View>
                <Header
                    placement="left"
                    centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
                    rightComponent={
                        <Icon
                            name='sign-out'
                            type='font-awesome'
                            color='#fff'
                            onPress={this.logOut}
                        />
                    }
                />
                <CardSection>
                    <Button onPress={this.readFromClipboard}>
                        Copy from Clipboard
                    </Button>
                </CardSection>
                <CardSection>
                    <Input
                        label="Image"
                        placeholder="Image"
                        value={this.props.image}
                        onChangeText={this.onImageChange}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Caption"
                        placeholder="Caption"
                        value={this.props.caption}
                        onChangeText={this.onCaptionChange}
                    />
                </CardSection>
                    <CardSection>
                        <Button onPress={this.onPostClick}>
                            Post
                        </Button>
                    </CardSection>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { user } = state.auth;
    const { image, caption } = state.pictForm;

    return { user, image, caption };
}

export default connect(mapStateToProps, { logoutUser, pictureUpdate, pictureCreate })(Profile);