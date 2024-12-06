import React, { useContext } from 'react'
import { Box, Card, CardActions, Typography, CardContent, CardHeader, Grid2 } from '@mui/material'
import { PostContextType, Idata } from "../types/postTypes"
import { AppContext, AppProvider } from '../context/AppContext'



function Post() {
  // const { todos, updateTodo } = React.useContext(AppContext) as PostContextType;
  const { data } = useContext(AppContext) as PostContextType
  // console.log(data)
  return (

    <>
      <Box >

<Grid2 container>

  {data.map((item) => {
          return (
            <Grid2 size={3} spacing={2}>
            <Card sx={{width:"300px",height:"200px"}}>
              <CardHeader
                title={item.title}
               />
                <CardContent>
                  {item.body}
                </CardContent>
            </Card>
            </Grid2>
          )
        })}
  
  </Grid2>
        


      </Box>
    </>
  )
}

export default Post;