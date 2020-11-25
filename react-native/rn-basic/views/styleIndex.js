import { 
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  IndexWrap: {
    // flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },

  ItemWrap: {
    width: '50%',
    height: 100,
    backgroundColor: '#6435c9'
  },

  ItemWrapMid: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    borderRadius: 50
  },

  ItemText: {
    textAlign: 'center',
    lineHeight: 100,
    color: '#fff'
  },

  ItemTextTop: {
    alignSelf: 'flex-end'
  },

  ItemTextBottom: {
    alignSelf: 'flex-start'
  }
})

export default styles