

import connect from "@/Utils/db";
import { NextResponse } from "next/server";
import Post from "@/model/Post";


export type GetProps = {
  params: {
    id: string;
  };
};

export const GET = async ( request :any ,{params} : GetProps) => {

   

    const { id } = params
  

// const  id = '64951aa2da1e3437d277d85e';

  try {
    await connect();

    const post = await Post.findById(id);


      return new NextResponse(JSON.stringify(post), { status: 200 });
    
  } catch (error) {
    
    return new NextResponse("Database error", { status: 500 });
  }
};

export const DELETE = async (request : any, { params } : any) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
