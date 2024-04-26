/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const factorial = (n) => {

      if(n < 0) {
        return -1;
      }

      if(n === 0) {
       return 1;
      }

      return n * factorial(n - 1);
};





const UseMemo = () => {
      const [counter, setCounter]  = useState(1);
      const [name, setName]        = useState();
      const result                 = factorial(counter);

      const handleName = (name) => {
          setName(name);
      };

  return (
    <View className="flex-1 px-2 py-3 justify-center items-center">
    
          <View className="flex mt-3">
                <Text className="text-2xl font-bold  text-blue-950"> React native hooks ( useMemo ) </Text>
          </View>
    
          <SafeAreaView className="flex flex-1 items-center justify-center">


                  <View className="flex flex-row mb-5 mt-2 ">
                        <Text className="text-xl font-sans text-black"> Factorial of </Text>
                        <Text className="text-xl font-bold text-blue-950"> {counter} </Text>
                        <Text className="text-xl font-sans text-black"> is : </Text>
                        <Text className="text-xl font-bold text-blue-950"> {result} </Text>
                  </View>
    
    
                <View className="flex flex-row ">
    
                      <TouchableOpacity className="flex py-3 px-4 border-2 border-blue-950 rounded-full bg-blue-900 items-center justify-center "
                            onPress={() => setCounter(counter + 1) }>
                            <Text className="text-sm font-bold"> + </Text>
                      </TouchableOpacity>
    
                            <Text className="text-xl text-blue-950 py-2 px-5"> { counter } </Text>
    
                      <TouchableOpacity className="flex py-3 px-4 border-2 border-red-950 rounded-full bg-red-700   items-center justify-center  "
                            onPress={() => setCounter(counter - 1) }>
                            <Text className="text-sm font-bold"> - </Text>
                      </TouchableOpacity>
    
                </View>
    
    
                <View className="flex py-2 px-3 mt-5 mx-4 ">
    
                        <View className="flex flex-row gap-x-2 py-0 mb-3 mt-3 px-1">
                            <TextInput className="flex w-full  pt-2 pb-1 border-b border-gray-500 bg-white  text-black "
                              placeholder='Enter your name'
                              placeholderTextColor={'#000'} 
                              value={name}
                              onChangeText={(name) => handleName(name) } />
                        </View>
    
                        <View className="flex flex-row mb-5 mt-2 ">
                              <Text className="text-base font-sans text-black"> My name is :  </Text>
                              <Text className="text-base font-bold text-blue-950">  {name} </Text>
                       </View>
    
                </View>
    
    
          </SafeAreaView>
    
        </View>
  );
};

export default UseMemo;