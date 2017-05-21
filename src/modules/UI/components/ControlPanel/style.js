import variables from '../../../../theme/variables/platform'
export default {

  container: {
    flex: 1,
    alignItems: 'stretch'
  },

  bitcoin: {
    container:{
      backgroundColor: '#7FC343',
      height: 48,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    icon: {
      color: '#FFF',
      paddingHorizontal: 23,
      fontSize: 28
    },

    value: {
      flex: 1,
      fontSize: 17,
      color: '#FFF',
    }
  },

  user: {
    container: {
      backgroundColor: '#2B5698',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 58,
    },

    icon: {
      fontSize: 25,
      color: '#FFF',
      paddingHorizontal: 23
    },

    name:{
      flex: 1,
      color: '#FFF',
      fontSize: 17
    }

  },

  main:{
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },

    link: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      borderStyle: 'solid',
      borderColor:'rgba(255,255,255,0.2)',
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5
    },


    icon: {
      flex:1,
      fontSize: 35,
      paddingHorizontal: 23,
      backgroundColor: 'transparent',
      color: '#FFF'
    },

    textContainer: {
      flex: 8,
      backgroundColor: 'transparent',
    },

    text: {
      fontSize: 15,
      color: '#FFF'
    },

    textItalic: {
      marginTop: 3,
      fontStyle: 'italic',
      fontSize: 13,
      color: '#FFF'
    }

  },

  others: {
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },

    link: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderStyle: 'solid',
      borderColor: '#efefef',
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5
    },

    icon: {
      fontSize: 35,
      paddingHorizontal: 15
    },

    icon_settings: {
      paddingHorizontal: 15
    },

    text: {
      flex: 1,
      fontSize: 14
    }

  },

  userList : {
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      borderStyle: 'solid',
      borderColor: '#efefef',
      borderBottomWidth: 0.5
    },
    text:{
      padding: 13,
      flex: 1
    },
    icon:{
      padding: 13
    }
  }

}
