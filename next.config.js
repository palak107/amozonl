// module.exports={
//     images: {
//           domains:["links.papareact.com","fakestoreapi.com"] ,
          
//     },
//     env:{
//         stripe_public_key: process.env.STRIPE_PUBLIC_KEY
//     }
    
// }


module.exports = {
    images: {
      domains: ["links.papareact.com", "fakestoreapi.com"],
    },
    env: {
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    },
    api: {
      bodyParser: false,
      externalResolver: true,
    },
  };
  