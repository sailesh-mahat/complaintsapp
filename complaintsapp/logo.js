import React, { Component } from 'react'
import { View, Image } from 'react-native'

const Logo = () => (
   <Image source = {require('/home/sailesh/Projects/complaintsapp/complaintsapp/images/logo.png')} 
   style = {{ width: 200, height: 200, alignSelf: 'center', marginTop: 200 }}
   />
)
export default Logo