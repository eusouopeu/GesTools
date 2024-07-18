// import { Image, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { FontAwesome6 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const StyledScrollView = styled(ScrollView)
const StyledView = styled(View)
const StyledLink = styled(Link)
const StyledText = styled(Text)

export default function HomeScreen() {
  return (
    <StyledScrollView className='flex flex-col w-full h-full bg-white'>
    <LinearGradient colors={['rgba(30,27,75,1)', '#FFFFFF']} locations={[ 0.8, 0 ]} style={styles.background} />
      <StatusBar style='auto' />
      <StyledView className='flex flex-col w-full h-[60vh]'>
        <StyledView className='flex flex-row items-center py-[40px] px-[24px] gap-[48px]'>
          <FontAwesome6 name='bars' size={32} color='#fff' />

          <StyledView className='flex flex-row items-center justify-center w-fit h-max gap-[10px]'>
            <StyledView className='flex flex-col'>
              <StyledText className='text-white font-bold'>Clinica Odontologica</StyledText>
              <StyledText className='text-white'>Rua Pernambues, 521</StyledText>
            </StyledView>
              <SimpleLineIcons name='arrow-down' size={16} color='#fff'/>
          </StyledView>
        </StyledView>
        
        <StyledView className='self-center flex justify-items-center py-[40px]'>
          <StyledText className='text-white text-center font-bold'> Agosto, 2020 </StyledText>
          <StyledText className='text-white text-4xl font-bold'> R$ 718,98 </StyledText>
          <StyledText className='text-white text-center'> 770 kWh </StyledText>

        </StyledView>
        
        {/* BOTOES */}
        <StyledView className='self-center top-[50px] flex flex-row gap-[10px]'>

          <StyledLink className='flex flex-col items-center justify-center w-[80px] h-[100px] m-[0] py-[8px] px-[4px] gap-[5px] bg-white border-2 border-green-500 rounded-xl shadow-lg' href='/Contas'>
            <FontAwesome6 name='check-circle' size={24} color='rgb(34 197 94)' />
            <StyledText className='text-center text-xs text-green-500'>Conta paga!</StyledText>
          </StyledLink>
          <StyledView className='flex flex-col items-center w-[80px] h-[100px] m-[0] py-[8px] px-[4px] gap-[5px] bg-white border-2 border-zinc-950 rounded-xl shadow-lg'>
            <FontAwesome6 name='file-text' size={24} color='rgb(0 0 0)' />
            <StyledText className='text-center text-xs'>Histórico</StyledText>
          </StyledView>
          <StyledView className='flex flex-col items-center w-[80px] h-[100px] m-[0] py-[8px] px-[4px] gap-[5px] bg-white border-2 border-zinc-950 rounded-xl shadow-lg'>
            <SimpleLineIcons name='chart' size={24} color='rgb(0 0 0)' />
            <StyledText className='text-center text-xs'>Relatórios</StyledText>
          </StyledView>
          <StyledView className='flex flex-col items-center w-[80px] h-[100px] m-[0] py-[8px] px-[4px] gap-[5px] bg-white border-2 border-zinc-950 rounded-xl shadow-lg'>
            <SimpleLineIcons name='user' size={24} color='rgb(0 0 0)' />
            <StyledText className='text-center text-xs'>Indicar amigos</StyledText>
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

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
