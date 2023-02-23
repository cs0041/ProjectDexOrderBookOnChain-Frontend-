
  import {  toast } from 'react-toastify'
import { shortenAddress } from './shortenAddress'


 export function notificationToast(myFunction: any)  {
    toast.promise(myFunction, {
      pending: {
        render() {
          return 'Loading . . .'
        },
        style: {
          padding: '10px',
          backgroundColor: '#1c1c28',
          color: 'white',
          borderWidth: '1px',
          borderColor: 'gray',
          overflow: 'auto',
          fontSize: 16,
          fontWeight: 'bold',
        },
      },
      success: {
        autoClose: 5000,
        style: {
          padding: '10px',
          backgroundColor: '#1c1c28',
          color: 'white',
          borderWidth: '1px',
          borderColor: 'gray',
          overflow: 'auto',
          fontSize: 16,
        },
        render({ data }: any) {
          return (
            <div>
              <h1 className="font-semibold ">Transaction receipt</h1>
              <a
                className="text-[#6f6e84] hover:text-white font-body text-base underline mt-5"
                href={`https://mumbai.polygonscan.com/tx/${data}`}
                target="_blank"
              >
                View on Mumbai: {shortenAddress(data)}
              </a>
            </div>
          )
        },
        // other options
        // icon: '🟢',
      },
      error: {
        autoClose: 3000,
        style: {
          backgroundColor: '#1c1c28',
          color: 'white',
          borderWidth: '1px',
          borderColor: 'gray',
          overflow: 'auto',
          fontSize: 16,
        },
        render({ data }: any) {
          return (
            <div>
              <h1 className="font-semibold ">Transaction Fail</h1>
              <p> {data.message}</p>
            </div>
          )
        },
      },
    }) 
 }

export function simpleNotificationToast(text: string) {
  toast.success(text, {
    autoClose:1000,
    style: {
      backgroundColor: '#1c1c28',
      color: 'white',
      borderWidth: '1px',
      borderColor: 'gray',
      overflow: 'auto',
      fontSize: 16,
    },
  })
}


// export function simpleNotificationToast(text: string) {
//   toastHot.success(text, {
//     style: {
//       backgroundColor: '#1c1c28',
//       color: 'white',
//       borderWidth: '1px',
//       borderColor: 'gray',
//       overflow: 'auto',
//       fontSize: 16,
//       maxWidth: '1200px',
//       // minWidth: '500px',
//     },
//   })
// }


// export function notificationToast(myFunction: any) {

//   toast.promise(
//     myFunction,
//     {
//       loading: 'Loading',
//       success: (data) =>
//         `Successfully Transaction Hash : https://mumbai.polygonscan.com/tx/${data}`,
//       error: (error) => `${error}`,
//     },
//     {
//       style: {
//         backgroundColor: '#1c1c28',
//         color: 'white',
//         borderWidth: '1px',
//         borderColor: 'gray',
//         overflow: 'auto',
//         fontSize: 16,
//         maxWidth: '1200px',
//         // minWidth: '500px',
//       },
//       success: {
//         duration: 5000,
//       },
//     }
//   )
// }
