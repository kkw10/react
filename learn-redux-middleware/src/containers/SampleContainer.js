import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Sample from '../components/Sample';
import { getPost, getUsers, GET_POST, GET_USERS } from '../modules/sample'; 
 
const SampleContainer = () => {
  const {
    post,
    users
  } = useSelector((state) => (state.sample))

  const loadingPost = useSelector((state) => (state.loading[GET_POST]))
  const loadingUsers = useSelector((state) => (state.loading[GET_USERS]))

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers(1));
  }, [getPost, getUsers])

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  )
}

export default SampleContainer;
