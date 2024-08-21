//  ab dekho promises wala 
const asyncHandler = (requestHandler) => {
  return (req,res,next) => {
    Promise.resolve(requestHandler(req,res,next))
    .catch((err) => next(err))
  }
}


export {asyncHandler}


// const asyncHandler = () =>{}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}
// Higher order function
// const asyncHandler = (fn) => async(req,res,next) => {
//   try {
//     await fn(req,res,next)
//   } catch (error) {
//     res.status(err.code || 500).json({
//       message: err.message
//     })
//   }
// }

