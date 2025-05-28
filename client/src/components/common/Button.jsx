export const Button = ({ text, type, onClick, className = '', style, name }) => {
  return (
    <>
        <button type={type} onClick={onClick} className={`btn ${className}`} style={style} name={name}>
            {text}
        </button>
    </>
  )
}