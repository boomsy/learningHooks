/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

 /*
   1 - DOM reference 
   2 - for storing the previous state 
   3 - hold mutable value prevent re-render of component 

 */

const UseRef = () => {
      const [name, setName]        = useState("");
      const [counter, setCounter]  = useState(0);
      const inputRef               = useRef("");
      const previousCounterRef     = useRef("");


      const resetInput = () => {
            inputRef.current.focus();
      };


      useEffect(() => {
            previousCounterRef.current = counter;
      }, [counter]);


      return (
            <View className="flex-1 px-2 py-3 justify-center items-center">

                  <View className="flex px-2 mt-3">
                        <Text className="text-2xl font-bold  text-blue-950"> React native hooks ( useRef ) </Text>
                  </View>


                  <SafeAreaView className="flex flex-1 items-center justify-center"> 

                        <View className="flex my-2 px-3">
                              <Text className="flex text-base  px-5 py-3  text-blue-950 border border-gray-300 bg-white">
                                    {name} 
                              </Text>
                        </View>

                        <View className="flex flex-row gap-x-2 py-0 mb-3 mt-3 px-1">

                            <TextInput ref={inputRef} className="flex w-3/4  pt-2 pb-1 border-b border-gray-500 bg-white  text-black "
                                  placeholder='Enter your name'
                                  placeholderTextColor={'#000'} 
                                  value={name}
                                  onChangeText={(name) => setName(name) } />
    
                              <TouchableOpacity className="flex px-2 rounded-2xl bg-blue-900 items-center justify-center "
                                  onPress={() => resetInput() }>
                                  <Text className="text-sm font-bold"> Resset </Text>
                              </TouchableOpacity>
                      </View>



                       <View className="flex py-0 mb-3 mt-3 px-1">
                              <Text className="text-xl pt-2 pb-2  text-black ">
                                  Random counter :  {counter}
                              </Text>

                              { typeof previousCounterRef.current !== "undefined" && (
                                    <Text className="text-center text-sm pt-2 pb-2 text-black ">
                                          Previous counter :  {previousCounterRef.current}
                                    </Text>
                              )}

                              <TouchableOpacity className="flex  px-2 py-3 rounded-2xl bg-blue-900 items-center justify-center "
                                    onPress={() => setCounter(Math.ceil(Math.random() * 100))}>
                                    <Text className="text-sm font-bold"> Generate number </Text>
                              </TouchableOpacity>
                        </View>



                  </SafeAreaView>

            </View>
      );
};

export default UseRef;