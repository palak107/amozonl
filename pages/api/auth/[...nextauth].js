import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // Correct import for Google provider

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
