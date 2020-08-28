import _ from 'lodash'
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import ListItem from './ListItem'
import { employeesFetch } from '../actions'
import { FlatList } from 'react-native'

class EmployeeList extends Component {
	UNSAFE_componentWillMount() {
		this.props.employeesFetch();
  }
  
  renderItem(employee) {
    return <ListItem employee={employee} />
  }
  
	render() {
		return (
			<FlatList
			data={this.props.employees}
			renderItem={this.renderItem}
			keyExtractor={employee => employee.uid }
			/>
		)
	}
}

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	})
	return { employees };
}

export default connect(mapStateToProps, { employeesFetch } )(EmployeeList);