import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import bombay from './image/bombay.jpg'
import { TAMBAH, KURANG } from './Actions'

class Counter extends Component {

    static mapStateToProps = state => {
        return {
            count: state.count
        }
    }

    static mapDispatchToProps = dispatch => {
        return bindActionCreators({
            TAMBAH,
            KURANG
        },
            dispatch
        )
    }

    render() {
        const { TAMBAH, KURANG } = this.props

        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <div>
                    <br /><br /> <img src={bombay} alt="bombay" style={{ resizeMode: "cover", height: 500, width: 550 }} />
                    <p style={{ textAlign: 'center', fontSize: 40 }}> Bawang Bombay asli INDIA</p>
                    <TouchableOpacity style={{ backgroundColor: '#E9967A', paddingBottom: 5, paddingTop: 10, paddingLeft: 10, paddingRight: 10 }} onPress={TAMBAH}>
                        <Text style={{ fontSize: 30, textDecorationStyle: 'double', textAlign: 'center' }}>Tambahkan Item</Text>
                    </TouchableOpacity>
                </div>
                <div>
                    <br /> <TouchableOpacity style={{ backgroundColor: '#E9967A', paddingBottom: 5, paddingTop: 10, paddingLeft: 20, paddingRight: 20 }} onPress={KURANG}>
                        <Text style={{ fontSize: 30 }}>Kurang</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 50, marginLeft: 20, marginRight: 20 }}>{this.props.count}</Text>
                    <TouchableOpacity style={{ backgroundColor: '#E9967A', paddingBottom: 5, paddingTop: 10, paddingLeft: 20, paddingRight: 20 }} onPress={TAMBAH}>
                        <Text style={{ fontSize: 30 }}>Tambah</Text>
                    </TouchableOpacity>
                </div>
            </View>
        )
    }
}

export default connect(
    Counter.mapStateToProps,
    Counter.mapDispatchToProps
)(Counter)