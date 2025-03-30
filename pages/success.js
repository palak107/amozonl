// import React from 'react';

// const Success = () => {
//   return (
//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column', 
//       alignItems: 'center', 
//       justifyContent: 'center', 
//       height: '100vh', 
//       fontFamily: 'Arial, sans-serif' 
//     }}>
//       <div style={{ 
//         backgroundColor: '#f0f2f2', 
//         padding: '20px', 
//         borderRadius: '8px', 
//         maxWidth: '600px', 
//         width: '90%'
//       }}>
//         <div style={{ 
//           display: 'flex', 
//           alignItems: 'center', 
//           marginBottom: '20px' 
//         }}>
//           <span style={{ 
//             color: 'green', 
//             fontSize: '24px', 
//             marginRight: '10px' 
//           }}>
//             &#10004; 
//           </span>
//           <h2 style={{ 
//             margin: '0', 
//             fontWeight: 'bold' 
//           }}>
//             Thank you, your order has been confirmed!
//           </h2>
//         </div>
//         <p style={{ 
//           fontSize: '16px', 
//           lineHeight: '1.6' 
//         }}>
//           Thank you for shopping with us. We'll send a confirmation once your item has shipped. If you would like to check the status of your order(s) please press the link below.
//         </p>
//         <a 
//           href="/orders" // Replace with your orders page URL
//           style={{ 
//             backgroundColor: '#ffd814', 
//             color: 'black', 
//             padding: '10px 20px', 
//             borderRadius: '4px', 
//             textDecoration: 'none', 
//             fontWeight: 'bold', 
//             marginTop: '20px', 
//             display: 'inline-block' 
//           }}
//         >
//           Go to my orders
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Success;
import React from 'react';

const Success = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      minHeight: '100vh', // Use minHeight instead of height
      paddingTop: '50px', // Add top padding
      fontFamily: 'Arial, sans-serif' ,
      justifyContent: 'flex-start', // Align to top
    }}>
      <div style={{ 
        backgroundColor: '#f0f2f2', 
        padding: '20px', 
        borderRadius: '8px', 
        maxWidth: '600px', 
        width: '90%'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '20px' 
        }}>
          <span style={{ 
            color: 'green', 
            fontSize: '24px', 
            marginRight: '10px' 
          }}>
            &#10004; 
          </span>
          <h2 style={{ 
            margin: '0', 
            fontWeight: 'bold' 
          }}>
            Thank you, your order has been confirmed!
          </h2>
        </div>
        <p style={{ 
          fontSize: '16px', 
          lineHeight: '1.6' 
        }}>
          Thank you for shopping with us. We'll send a confirmation once your item has shipped. If you would like to check the status of your order(s) please press the link below.
        </p>
        <a 
          href="/orders" // Replace with your orders page URL
          style={{ 
            backgroundColor: '#ffd814', 
            color: 'black', 
            padding: '10px 20px', 
            borderRadius: '4px', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            marginTop: '20px', 
            display: 'inline-block' 
          }}
        >
          Go to my orders
        </a>
      </div>
    </div>
  );
};

export default Success;