import React, { Suspense } from 'react'
import PostArt from '../page'

async function LoadPage(id){
    const resp = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await resp.json()
    return data
}

async function Page({params}) {
    const post = await LoadPage(params.id)

    return (
        <div>
            <h1 style={{fontSize: "30px"}}>Articulo {post.id}</h1>
            <h3 style={{fontSize: "15px"}}><b style={{fontSize: "20px"}}>Titulo:</b> {post.title}</h3>
            <p><b style={{fontSize: "20px"}}>Informacion:</b> {post.body}</p>
            <hr />
        <div style={{fontSize: "30px"}}>Otras publicaciones</div>
        
        <Suspense fallback={<div>
            Loading Post...
        </div>}>
            <PostArt />
        </Suspense>
        
        </div>
        
    )
}

export default Page