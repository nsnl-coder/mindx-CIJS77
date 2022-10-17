import * as yup from 'yup'

const newPostFormSchema = yup.object().shape({
  postTitle: yup
    .string()
    .matches(/^[A-Za-z0-9_\s]*$/, 'Tile should only contains alphabets (a-z,A-Z), and underscore.')
    .min(15, 'Title should contains 15 characters'),
  postBody: yup.string().min(15, "Post's body should contain least 15 characters"),
})
export default newPostFormSchema
