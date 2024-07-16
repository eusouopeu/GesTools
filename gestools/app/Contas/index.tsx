// import { Image, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import { FontAwesome6 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const StyledScrollView = styled(ScrollView)
const StyledView = styled(View)
const StyledText = styled(Text)

export default function HomeScreen() {
  return (
    <StyledScrollView className='flex flex-col w-full h-full bg-white'>
    <LinearGradient colors={['rgba(30,27,75,1)', '#FFFFFF']} locations={[ 0.8, 0 ]} style={styles.background} />
      <StatusBar style='auto' />
      <StyledView className='flex flex-col w-full h-[60vh]'>
        <StyledView className='flex flex-row items-center py-[40px] px-[24px] gap-[48px]'>
          <FontAwesome6 name='bars' size={32} color='#fff' />
        </StyledView>
        
        <StyledView className='self-center flex flex-col justify-items-center py-[12px] gap-[32px]'>
          <StyledText className='text-white text-4xl font-bold'>Conta de Luz Descomplicada.</StyledText>

          <StyledView className='flex flex-row items-end justify-between'>
          <StyledView className='flex flex-col'>
              <StyledText className='text-white font-bold'>Clinica Odontologica</StyledText>
              <StyledText className='text-white'>Rua Pernambues, 521</StyledText>
          </StyledView>
          <StyledText className='text-white text-center text-xs'> Agosto, 2020 </StyledText>
          </StyledView>

        </StyledView>
        
        {/* BOTOES */}
        <StyledView className='self-center top-[50px] flex flex-row gap-[10px]'>

          <StyledView className='flex flex-row items-center justify-between w-[90%] h-[100px] m-[0] py-[8px] px-[16px] gap-[5px] bg-green-500 border-2 border-indigo-950 rounded-[32px] shadow-lg'>
            <StyledView className='flex flex-col items-center w-fit gap-[8px]'>
              <FontAwesome6 name='dollar-sign' size={24} color='rgb(0 0 0)' />
              <StyledText className='text-center text-xs text-indigo-950 font-bold'>Valor</StyledText>
            </StyledView>

            <StyledView className='flex flex-col items-end'>
              <StyledText className='text-start text-xs text-indigo-950 font-bold'>770 kWh</StyledText>
              <StyledText className='text-center text-3xl text-indigo-950 font-bold'>R$ 718,98</StyledText>
            </StyledView>
          </StyledView>

        </StyledView>
      </StyledView>

      <StyledView className='self-center mt-[16px] flex flex-col items-center w-[320px] h-[320px] p-[32px] bg-green-500 border-2 border-indigo-950 rounded-2xl'>
        <StyledText className='flex p-[10px] bg-white border-2 border-indigo-950 rounded-full font-extrabold'> Economize na Conta de Luz! </StyledText>
      </StyledView>


    </StyledScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  }
})