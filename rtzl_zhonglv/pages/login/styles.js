import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  bgimg: {
    position: 'absolute',
    top: 0,
    height: '100%',
  },
  form: {
    flexBasis: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 200,
  },
  formItem: {
    width: '80%',
    height: 70,
    backgroundColor: '#fff',
    marginVertical: 15,
    borderRadius: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    // ========
    elevation: 8,
  },
  formItemBorder: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  formInput: {
    fontSize: 18,
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  inputIcon: {
    width: 24,
    height: 24,
  },
  btn: {
    backgroundColor: '#00408f',
  },
  btnText: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  ls8: {letterSpacing: 2},
  ls18: {letterSpacing: 18},
  configimg: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
  },
});

export default styles;
