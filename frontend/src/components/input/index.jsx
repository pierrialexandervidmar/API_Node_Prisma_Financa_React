const InputComponent = ({ label, placeholder, value, onChange, type, required }) => {
    return (
        <>
            <label className='form-label'>{label}</label>
            <input 
                className='form-control' 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                required={required}
            />
        </>
    )
}

export default InputComponent;