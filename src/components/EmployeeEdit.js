import _ from 'lodash'
import React,{ Component } from 'react'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import { connect } from 'react-redux'
import { Card, CardSection, Button, Confirm } from './common'
import Communications from 'react-native-communications'

class EmployeeEdit extends Component {
	state = { showModal: false };
	UNSAFE_componentWillMount() {
		_.each(this.props.employee.item, (value, prop) => {
			this.props.employeeUpdate({ prop, value});
		})
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeSave({name, phone, shift, uid: this.props.employee.item.uid })
	}

	onTextPress() {
		const { name, phone, shift } = this.props;
		Communications.text(phone, `Heyy ${name}, your upcoming shift is on ${shift}`);
	}

  onDecline() {
   	this.setState({ showModal: false });
  }
  
  onAccept() {
    const { uid } = this.props.employee.item;
    this.props.employeeDelete({ uid });
  }
  
	render() {
		return (
			<Card>
			<EmployeeForm />
			<CardSection>
			<Button onPress={this.onButtonPress.bind(this)}>
			 Save Changes
			</Button>
			</CardSection>
			<CardSection>
			<Button onPress={this.onTextPress.bind(this)}>
			 Text Schedule
			</Button>
			</CardSection>
			<CardSection>
			<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
			 Fire Employee
			</Button>
			</CardSection>
			<Confirm
			visible={this.state.showModal}
			onAccept={this.onAccept.bind(this)}
			onDecline={this.onDecline.bind(this)}
			>
			 Are you sure you want to delete this?
			</Confirm>
			</Card>
		)
	}
}

const mapStateToProps = state => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
}

export default  connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);