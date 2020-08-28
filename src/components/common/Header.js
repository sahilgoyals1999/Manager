import React from 'react';
import { Text,View } from 'react-native';

const styles = {
	textStyle: {
		fontSize: 35
	},
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 70,
		paddingTop: 10,
		shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
		elevation: 2,
		position: 'relative'
	}
}

 const Header = (props) => {
  const { textStyle,viewStyle } = styles;
	return (
		<View style={viewStyle}>
		<Text style={textStyle}>{props.headertext}</Text>
		</View>
	)
}

export { Header };
