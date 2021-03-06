import React, {Component} from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import CommentList from '../../components/Comment/CommentList'
import RestaurantDropdown from '../../components/Restaurant/RestaurantDropdown';

export default class ReviewsRestaurant extends React.Component{
    constructor() {
        super();
        this.state = {
            restaurantId: null
        };
    }

    updateRestaurantId(restaurantId){
        this.setState({
            restaurantId
        })
    }

    render(){
        const {restaurantId} = this.state; 
        return(
            <BackgroundImage source={require('../../../assets/images/bg.jpg')}>
                <View style={styles.container}>
                    <RestaurantDropdown
                        onChangeRestaurant={(id) => this.updateRestaurantId(id)}
                        restaurantId={restaurantId}
                    />
                </View>

                {restaurantId ?
                    <ScrollView>
                        <CommentList restaurantId={restaurantId}/>
                    </ScrollView>
                    :
                    <Text style={styles.emptyComments}>No tenemos comentarios</Text>
                }
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(231, 228, 224, 0.8)',
        padding: 10
    },
    emptyComments: {
        backgroundColor: 'rgba(10, 255, 10, 0.8)',
        color: 'white',
        textAlign: 'center',
        padding: 20
    }
});