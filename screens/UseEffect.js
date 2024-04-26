/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffect = () => {

      const [time, setTime]        = useState(new Date().toString());
      const [message, setMessage]  = useState("Init message");

      useEffect(() => {
            console.log("Component mounted or updated .....> ");

      }, [time]);

      const showDate = () => {
            setTime(new Date().toString());
      };


      return (
            <View className="flex-1 px-2 py-3 justify-center items-center">

                  <View className="flex mt-3">
                        <Text className="text-2xl font-bold  text-blue-950"> React native hooks ( useEffect ) </Text>
                  </View>


                  <SafeAreaView className="flex flex-1 items-center justify-center"> 

                        <View className="flex my-2 p-2">
                              <Text className="text-base text-blue-950"> {time} </Text>
                        </View>

                        <TouchableOpacity 
                            className="flex py-2 px-5 border-2 border-blue-900 rounded-2xl bg-blue-800   items-center justify-center "
                            onPress={() => showDate() }>
                            <Text className="text-xl font-bold text-white"> Show date </Text>
                        </TouchableOpacity>


                        <View className="flex my-2 p-2">
                              <Text className="text-xl text-blue-950"> {message} </Text>
                        </View>

                        <TouchableOpacity 
                            className="flex py-2 px-5 border-2 border-gray-900 rounded-2xl bg-gray-800   items-center justify-center "
                            onPress={() => setMessage(" Change message component ") }>
                            <Text className="text-xl font-bold text-white"> Change message </Text>
                        </TouchableOpacity>
                        
                  </SafeAreaView>

            </View>
      );

}


export default UseEffect;