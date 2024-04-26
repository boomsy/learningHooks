/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const initValues = () => {
      console.log(' Function init values called ......> ');
      return 0;
};

const UseState = () => {
      const [counter, setCounter]  = useState(0);
      const [name, setName]        = useState();
      const [names, setNames]      = useState([]);
      const [steps, setSteps]      = useState(initValues());
      
      const handleName = (name) => {
          setName(name);
      };
    

      const addName = () => {
         if(name) {
                setNames([...names, {id: names.length + 1 , name}]);
                setName("");
          }
      };
    
     
      return (
        <View className="flex-1 px-2 py-3 justify-center items-center">
    
          <View className="flex mt-3">
                <Text className="text-2xl font-bold  text-blue-950"> React native hooks ( useState ) </Text>
          </View>
    
          <SafeAreaView className="flex flex-1 items-center justify-center">
    
    
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
    
    
                <View className="flex py-2 px-3 mt-5 mx-4 bg-gray-200 ">
    
                      <View className="flex flex-row gap-x-2 py-0 mb-3 mt-3 px-1">
                            <TextInput className="flex w-3/4  pt-2 pb-1 border-b border-gray-500 bg-white  text-black "
                                  placeholder='Enter your name'
                                  placeholderTextColor={'#000'} 
                                  value={name}
                                  onChangeText={(name) => handleName(name) } />
    
                            <TouchableOpacity className="flex px-2 rounded-2xl bg-blue-900 items-center justify-center "
                                  onPress={() => addName() }>
                                  <Text className="text-sm font-bold"> Ajouter </Text>
                            </TouchableOpacity>
                      </View>
    
                      <View className="flex mb-5 mt-2 ">
                         <Text className="border-b border-gray-400 text-black"> Liste des elements </Text>
                         <View className="flex gap-y-1 py-2">
                            {names.map((item) => (
                               <Text key={item.id} className="text-gray-600"> {item.name} </Text>
                            ))}
                         </View>
                      </View>
    
                </View>
    
    
          </SafeAreaView>
    
        </View>
      );

};

export default UseState;