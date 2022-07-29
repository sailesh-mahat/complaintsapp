import React, { Component } from 'react'
import { View, Image } from 'react-native'

const Logo = () => (
   <View style={{backgroundColor: "rgb(204, 230, 255)"}}>
   <Image source = {require('/home/sailesh/Projects/complaintsapp/complaintsapp/images/logo.png')} 
   style = {{ width: 200, height: 200, alignSelf: 'center', marginTop: 50, backgroundColor: "rgb(204, 230, 255)" }}
   />
   </View>
)
export default Logo