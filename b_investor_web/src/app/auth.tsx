import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
export async function auth(email: string) {
    let authed = false;
    try {
      const token = cookies().get("AuthCookieTracking")?.value; // Access the cookie value as a string
      if (!token) {
       throw new Error("No token found");
      }
      const user = jwt.verify(token, process.env.SECRET_KEY_JWT as string) as {
        username: string;
      };
  
      if (user.username !== email) {
        throw new Error("Invalid token");
      }    
      authed = true;
    } catch (error) {
      console.error("Error verifying token: ", error instanceof Error ? error.message : error);    
    }
    if(!authed){
      redirect("/");
    }
  }