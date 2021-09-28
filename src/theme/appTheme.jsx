import { StyleSheet } from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    // alignItems: "flex-start",
    marginTop: 10,
    marginLeft: 30,
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  informationText: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  menuButton: {
    marginVertical: 16,
  },
  menuText: {
    fontSize: 20,
  },
  globalBackground: {
    flex: 1,
  },
  scheduleContainer: {
    marginVertical: 30,
    // backgroundColor:"red"
  },
  scheduleTitleText: {
    fontSize: 33,
    textAlign: 'center',
    marginBottom: 20,
  },
  scheduleText: {
    fontSize: 17,
    textAlign: 'center',
  },
});
