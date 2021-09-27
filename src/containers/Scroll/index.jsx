import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import List from '@mui/material/List';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import Avatar from '@mui/material/Avatar'

import useStyles from './Scroll.styles'
import { data } from './data'
import { Loader } from '../../components/common'

export default function Scroll() {
  const classes = useStyles()
  const [scrollData, setScrollData] = useState(data)
  const [loader, setLoader] = useState(false)

  const handleLoadMore = () => {
    setLoader(true)

    setTimeout(() => {
      setScrollData((prev) => prev.concat(...data))
      setLoader(false)
    }, 1000)
  }

  return (
    <div className={classes.root}>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleLoadMore}
        hasMore={true}
      >
        <List className={classes.list}>
          {scrollData?.length && scrollData.map((user, key) => (
            <Card className={classes.root} key={key}>
              <CardHeader
                title={
                  <Typography variant='subtitle1' noWrap>
                    <Avatar children={ user.username[0] } />
                    {user.username}
                  </Typography>}
              />

            </Card>
          ))}
        </List>
      </InfiniteScroll>
      {loader && (
        <Loader />
      )}
    </div>
  )
}
