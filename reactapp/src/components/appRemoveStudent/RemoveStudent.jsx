import { useState } from "react";
import {Button, Modal, ModalHeader, ModalFooter} from "reactstrap";
import axios from "axios";
import {API_URL} from "../../index";

const AppRemoveStudent = (props) => {
	const [visible, setVisible] = useState(false);

	const toggle = () => {
		setVisible(!visible)
	}

	const deleteStudent = () => {
		console.log(props);
        axios.delete(API_URL + props.pk).then(() => {
            props.resetState()
            toggle();
        });
    }

	return (
		<>
			<Button color="danger" onClick={() => toggle()}>
				Delete
			</Button>
			<Modal isOpen={visible} toggle={toggle} style={{width: "300px"}}>
				<ModalHeader style={{justifyContent: "center"}}>Are you sure?</ModalHeader>
				<ModalFooter style={{display: "flex", justifyContent: "space-between"}}>
					<Button
						type="button"
						onClick={() => deleteStudent()}
						color="primary"
					>Delete</Button>
					<Button type="button" onClick={() => toggle()}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</>
	)
}

export default AppRemoveStudent;