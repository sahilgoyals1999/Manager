import React,{ Component } from 'react'
import { Text, View, Picker } from 'react-native'
import { CardSection, Input } from './common'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'

class EmployeeForm extends Component {
	onNameChanged(text) {
    this.props.employeeUpdate({ prop: 'name', value: text });
  }

  onPhoneChanged(text) {
    this.props.employeeUpdate({ prop: 'phone', value: text });
  }
  
	render() {
		return (
		<View>
		<CardSection>
		  <Input
		   label="Name:"
		   placeholder="Jane"
		   value={this.props.name}
		   onChangeText={ text => this.props.employeeUpdate({ prop: 'name', value: text }) }
		  />
		 </CardSection>
		 <CardSection>
		  <Input
		   label="Phone:"
		   placeholder="555-555-5555"
		   value={this.props.phone}
		   onChangeText={ text => this.props.employeeUpdate({ prop: 'phone', value: text }) }
		  />
		 </CardSection>
		 <CardSection style>
		  <Text style={styles.pickerTextStyle}>Shift:</Text>
		  <Picker
		   style={{ flex:1 }}
		   selectedvValue={this.props.shift}
		   onValueChange={ text => this.props.employeeUpdate({ prop: 'shift', value: text }) }
		   >
		   <Picker.Item label="Monday" value="Monday" />
		   <Picker.Item label="Tuesday" value="Tuesday" />
		   <Picker.Item label="Wednesday" value="Wednesday" />
		   <Picker.Item label="Thursday" value="Thursday" />
		   <Picker.Item label="Friday" value="Friday" />
		   <Picker.Item label="Saturday" value="Saturday" />
		   <Picker.Item label="Sunday" value="Sunday" />
		  </Picker>
		 </CardSection>
		 </View>
		)
	}
}

const styles = {
	pickerTextStyle: {
		alignSelf: 'center',
		fontSize: 18,
		padding: 18,
	}
}

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
}

export default connect(mapStateToProps,{ employeeUpdate} )(EmployeeForm);