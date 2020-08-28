import React from 'react';
import { View } from 'react-native';

function CardSection(props) {
	return (
		<View style={[styles.containerStyle, props.style]}>
      {props.children}
		</View>
	)
}
const styles = {
	containerStyle: {
		borderBottomWidth: 2,
		padding: 6,
		backgroundColor: '#fff',
		justiftContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
} 
export { CardSection }