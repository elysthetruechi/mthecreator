

const card = ({className, children}) => {
  return (
    <article className= {`card $ {className}`}>
        {children}
         </article>
  )
}

export default card