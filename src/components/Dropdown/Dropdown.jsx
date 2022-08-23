import './Dropdown.css';

const Dropdown = ({ id, label, placeholder, data, value, handleChange }) => {
	return (
		<div className='dropdown-container'>
			<label htmlFor={id}>{label}</label>
			<select name={id} id={id} value={value} onChange={handleChange}>
				<option value='' disabled hidden id='select-option-disabled'>
					{placeholder}
				</option>
				{data.map((option) => (
					<option key={option.id} value={option.name}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
