import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  displayContainer: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center'
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },
  inputContainer: {
    flex: 8,
    backgroundColor: 'grey'
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black'
  },

  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black'
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default Style;
