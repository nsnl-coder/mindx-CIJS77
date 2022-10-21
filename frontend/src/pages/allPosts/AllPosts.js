import { useMemo } from 'react'
import Page from '../../components/shared/Page'
import PageHOC from '../../components/shared/PageHOC'
import Table from '../../components/table/Table'

const AllPosts = () => {
  return (
    <Page title='See all posts'>
      <Table />
    </Page>
  )
}

export default PageHOC(AllPosts)
