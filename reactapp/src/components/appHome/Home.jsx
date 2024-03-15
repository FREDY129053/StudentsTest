import { Container, Row, Col } from "reactstrap";
import ListStudents from '../appListStudents/ListStudents';
import axios from 'axios';
import { useState, useEffect } from "react";
import ModalStudents from '../appModalStudents/ModalStudents';
import {API_URL} from '../../index'

const Home = () => {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		getStudents();
	}, [])

	const getStudents = (data) => {
		axios.get(API_URL).then(data => setStudents(data.data));
	}

	const resetState = () => {
		getStudents();
	}

	return (
		<Container style={{marginTop: "20px"}}>
			<Row>
				<Col>
					<ListStudents students={students} resetState={resetState} newStudent={false} />
				</Col>
			</Row>
			<Row>
				<Col>
					<ModalStudents 
						create={true}
						resetState={resetState}
						newStudent={true}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default Home;