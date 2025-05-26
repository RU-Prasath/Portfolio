const Input = ({type, value, name, placeholder, style, onChange}) => {
  return (
    <input type={type} value={value} name={name} onChange={onChange} placeholder={placeholder} style={style} required />
  )
}

export default Input