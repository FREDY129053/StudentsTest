export default function Header() {
	return (
		<div className="text-center">
			<img 
				src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
				width={100}
				className="img-thumbnail"
				style={{marginTop: "20px"}}
				alt="logo"
			/>
			<hr />
			<h1 className="text">App for React + Django Rest Framework</h1>
		</div>
	)
}