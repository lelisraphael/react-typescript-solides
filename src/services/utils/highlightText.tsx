type Params = {
  content: string
  toHighlight: string
}

const HighlightText = ({ content, toHighlight }: Params) => {
  const regex = new RegExp(`(${toHighlight})`) 

  return (
    <>
      {content.split(regex).map((mark, index) => {
        if (mark.toLowerCase() === toHighlight.toLowerCase()) {
          return (
            <strong key={index}>
              {mark}
            </strong>
          )
        }
        return mark
      })}
    </>
  )
}

export default HighlightText
