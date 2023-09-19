import Card from "../card/Card";
import React from 'react'
import style from "./cardList.module.css";
import Pagination from '../pagination/Pagination';


  const getData  = async (page,cat) =>{
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });


    if(!res.ok){
      throw new Error("failed to load categories")
    }
    return res.json();
  }



const CardList = async ({page,cat}) => {

  const {posts,count} = await getData(page ,cat);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page-1) > 0 ;
  const hasNext =  POST_PER_PAGE * (page-1) + POST_PER_PAGE < count;
  
  return (
    <div className={style.container}>
    <h1 className={style.title}>Recent Posts</h1>
    <div className={style.posts}>
       {posts?.map((item)=>(
          <Card key={item._id} item={item}/>
       ))}   
      </div>
        <Pagination hasPrev={hasPrev} hasNext={hasNext} page={page} />
    </div>
  )
}
export default CardList