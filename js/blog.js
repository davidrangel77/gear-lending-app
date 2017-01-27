import React from 'react'
import { Link } from 'react-router'
import Footer from './footer'

export default React.createClass({
  getInitialState(){
    return {
      posts: [
        {
          id: 0,
          title: "Oh, the weekend...",
          text: "So remember weekends? Those were fun when they were a thing.Our first big project was to take a design page (in this case a YouTube screenshot) and make it a functional webpage. On day 4. Having to rewrite our code from the wireframe day (see below) wasn’t so bad. It helped to rewrite it and make it cleaner and more concise. Of course I probably rewrote it a few more times in the course of the exercise as I had to group things and containers and divs and forms and lists and sections and wrappers and mains and asides and headers…you get the idea.",
          url: "https://medium.com/@mrdavidrangel/oh-the-weekend-1-4-1-6-5b76c3e2dbf3#.nfnmalr14"
        },
        {
          id: 1,
          title: "I should have been blogging…and now it’s an assignment…",
          text: "I was thinking over the holidays that if I wasn’t going to be able to do much work I should at least blog. And I didn’t and here we are, the second day back in class from our break and it’s a morning assignment. A sign I should have been blogging regularly as I planned? Probably not. But I’ll take it that way and start to make it habit again. To be honest I had backburnered (that’s not a word) daily blogging in week 2 after having to spend so much time on homework assignments daily that I was enjoying working on those things, not writing about it. It seemed a bit redundant to do the work and then tell a mystery audience that I had done it.",
          url:"https://medium.com/@mrdavidrangel/i-should-have-been-blogging-and-now-its-an-assignment-1916ac52e756#.z8zrbs5u5"
        },
        {
          id: 2,
          title: "Day 1 Blog Post, part 2 (1.1.2)",
          text: "I didn’t finish this post yesterday because, simply, I got distracted waiting for traffic to die down leaving Pearl and then busy making the lunch I forgot today, so I’ll continue in the bit of time we have left during lunch here on 1.2. For future reference (for us both) the “1” in 1.2 is the week, and the “2” in 1.2 is the day.",
          url: "https://medium.com/@mrdavidrangel/day-1-blog-post-part-2-1-1-2-fd2320218114#.3mjzqk2sw"
        }
      ]
    }
  },

  render() {
    return (
      <section>
      <h1 className="pageHeadingTitle">Assorted Blog Posts</h1>
      <div className="blogWhole">
        {
          this.state.posts.map((blogPost, i)=>{
            return (
              <div key={i} className="content">
                <h3 className="blogPostTitle"> {blogPost.title} </h3>
                <p className="blogPostText"> {blogPost.text} <a href={blogPost.url} target="_blank">See More...</a></p>
              </div>
            )
          })
        }
      </div>
      </section>
    )
  }
})
