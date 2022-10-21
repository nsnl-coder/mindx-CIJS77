import Header from '../header/Header'

const PageHOC = (OriginalComponent) => () => {
  return (
    <>
      <Header />
      <OriginalComponent />
    </>
  )
}
export default PageHOC
