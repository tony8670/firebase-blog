import React from 'react'
import Post from './Post'

const DATA = [
    {
        id: "1",
        tag: "Social",
        img: "https://images.unsplash.com/photo-1527168027773-0cc890c4f42e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9zdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop",
        heading: "Many desktop publishing packages and web page editors"
    },
    {
        id: "2",
        tag: "Sexy",
        img: "https://images.unsplash.com/photo-1567892320421-1c657571ea4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2V4eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop",
        heading: "is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,"
    },
    {
        id: "3",
        tag: "Tech",
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop",
        heading: "Many desktop publishing packages and web page editors"
    },
]


const Section = () => {
    return (
        <div className="container-fluid my-5">
            <h2 className="fw-bold px-2 fs-1">World News</h2>
            <div className="d-flex my-3">
                {DATA.map((item) => (
                    <Post index={item.id} img={item.img} tag={item.tag} heading={item.heading} />
                ))}
            </div>
        </div>
    )
}

export default Section
