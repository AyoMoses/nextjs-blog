// error.js is only used in production. Using in dev env shoots an error to know where the error is from

// function Error({ statusCode }) {
//     return (
//         <p>
//             {statusCode
//                 ? `An error ${statusCode} occurred on server`
//                 : 'An error occurred on client'}
//         </p>
//     )
// }

// Error.getInitialProps = ({ res, err }) => {
//     const statusCode = res ? res.statusCode : err ? err.statusCode : 404
//     return { statusCode }
// }

// export default Error
