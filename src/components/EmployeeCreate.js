import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';

class EmployeeCreate extends Component {
    static navigationOptions = {
        drawerLabel: 'Add New Employee'
    }

    onButtonPress = () => {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate(name, phone, shift || 'sunday');
    }

    render() {
        return (
            <View>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.toggleDrawer()}}
                    centerComponent={{ text: 'Add Employee', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff', onPress: () => this.props.navigation.navigate('Employee List') }}
                />
                <Card>
                    <EmployeeForm />
                    <CardSection>
                        <Button onPress={this.onButtonPress}>
                            Save
                        </Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);