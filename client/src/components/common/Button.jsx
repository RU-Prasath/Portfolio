export const Button = ({ text, type, onClick, className = '', style, name }) => {
  return (
    <>
        <button type={type} onClick={onClick} className={`btn ${className}`} style={style} aria-label={name}>
            {text}
        </button>
    </>
  )
}