import {Table} from "reactstrap";
import ModalStudents from '../appModalStudents/ModalStudents';
import AppRemoveStudent from '../appRemoveStudent/RemoveStudent';
import ModalPhoto from '../appPhotoModal/ModalPhoto';

const ListStudents = (props) => {
	const { students } = props

	return (
		<Table dark>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Document</th>
					<th>Phone</th>
					<th>Registration</th>
					<th>Photo</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{!students || students.length<= 0 ? (
					<tr>
						<td colSpan={6} align="center">
							<b>Nothing yet...</b>
						</td>
					</tr>
				) : students.map(student => (
					<tr key={student.pk}>
						<td>{student.name}</td>
						<td>{student.email}</td>
						<td>{student.document}</td>
						<td>{student.phone}</td>
						<td>{student.registration_date}</td>
						<td><ModalPhoto student={student} /></td>
						<td>
							<ModalStudents
								create={false}
								student={student}
								resetState={props.resetState}
								newStudent={props.newStudent}
							/>
							&nbsp;&nbsp;
							<AppRemoveStudent 
								pk={student.pk}
								resetState={props.resetState}
							/>
						</td>
					</tr>
				)
			)}
			</tbody>
		</Table>
	)
}

export default ListStudents;