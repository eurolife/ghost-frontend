// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { getPosts } from '../lib/posts'

export default function Home({ posts }) {
  
  useEffect(() => {
    
  }, [])
  return (
    <div className={styles.container}>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps(context) {
  const posts = await getPosts()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }
  }
}
