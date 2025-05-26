export const Button = ({ text, type, onClick, className = '', style }) => {
  return (
    <>
        <button type={type} onClick={onClick} className={`btn ${className}`} style={style}>
            {text}
        </button>
    </>
  )
}