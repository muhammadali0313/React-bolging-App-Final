import React from 'react'
import Layout from '../../component/layout/Layout'
import HeroSection from '../../component/heroSection/HeroSection'
import BlogPostCard from '../../component/blogPostCard/BlogPostCard'
import Footer from '../../component/footer/Footer'

function Home() {
  return (
    <Layout>
              <HeroSection/>
              <BlogPostCard/>
              
              
    </Layout>
  )
}

export default Home