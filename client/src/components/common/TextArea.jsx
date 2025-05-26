const TextArea = ({rows, cols, name, onChange, style}) => {
  return (
    <textarea name={name} cols={cols} rows={rows} onChange={onChange} style={style}></textarea>
  )
}

export default TextArea