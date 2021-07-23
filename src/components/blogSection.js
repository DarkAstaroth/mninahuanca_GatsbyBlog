import React from 'react';
import SimpleCardBlog from './simpleCardBlog';

const BlogSection = () => {
    return (
        <>
            <section className="is-text-align-center">
                <div className="content-wrap">
                    <div className="content">
                        <h2>Blog Section</h2>
                        <p></p>
                    </div>
                </div>

                <div className="row">
                    <div className="posts">
                        <SimpleCardBlog />
                        <SimpleCardBlog />
                        <SimpleCardBlog />
                    </div>
                    <a class="button bold uppercase" href="#!">Go to Blog</a>
                </div>
            </section>
        </>
    );
}

export default BlogSection;