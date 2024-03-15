import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import StudentForm from "../appStudentForm/StudentForm"

const ModalStudent = (props) => {
	const [visible, setVisible] = useState(false);
	const toggle = () => {
		setVisible(!visible);
	}
	var button = <Button onClick={() => toggle()}>Edit</Button>

	if (props.create) {
		button = (
			<Button
				color="primary"
				className="float-tight"
				onClick={() => toggle()}
				style={{minWidth: "200px"}}
			>Add Student</Button>
		)
	}

	return (
		<>
			{button}
			<Modal isOpen={visible} toggle={toggle}>
				<ModalHeader style={{justifyContent: 'center'}}>
					{props.create ? "Add Student" : "Edit Student"}
				</ModalHeader>
				<ModalBody>
					<StudentForm
						student={props.student ? props.student : []}
						resetState={props.resetState}
						toggle={toggle}
						newStudent={props.newStudent}
					/>
				</ModalBody>
			</Modal>
		</>
	)
}

export default ModalStudent;