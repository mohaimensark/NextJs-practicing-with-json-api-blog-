import React, { use,useState,useEffect } from 'react'
import styles from "@/styles/Blogpost.module.css";
import { useRouter } from 'next/router'
import * as fs from 'fs';

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page


// server side rendering 
// const slug = (props) => {
//     const [blog, setBlog] = useState(props.myBlog);


//     return <div className={styles.container}>
//         <main className={styles.main}>
//             <h1>{blog && blog.title}</h1>
//             <hr />
//             <div>
//                 {blog && blog.content}
//             </div>
//         </main>
//     </div>;
// };

// export async function getServerSideProps(context) {
//     // console.log(context.query)
//     // const router = useRouter();
//     const { slug } = context.query;

//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//     let myBlog = await data.json()
//     return {
//         props: { myBlog }, // will be passed to the page component as props
//     }
// }

// export default slug;

// static site generation

const Slug = (props) => {
    function createMarkup(c) {
        return { __html: c };
    }
    const [blog, setBlog] = useState(props.myBlog);


    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>{blog && blog.title}</h1>
            <hr />
            {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
        </main>
    </div>;
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } },
        ],
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {
    const { slug } = context.params;


    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
}
export default Slug;