import parse from 'html-react-parser'

export const ConvertText = (props) => {
  const {contentHTML} = props;
  return (
    <>
    {parse(contentHTML)}
    </>
  )
}
