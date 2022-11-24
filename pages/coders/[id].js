import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    const paths = data.map((coder) => {
        return {
            params: {
                id: coder.id.toString()
            }
        };
    });
    return {
        paths,
        fallback: false,
    };
};



export const getStaticProps = async (context) => {
    const id = context.params.id;
    // Sau khi lấy được id, tiến hành gửi request 
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    // fetch link user 10 nguoi + id vua lay duoc
    const data = await res.json();
    // json data ra obj
    return {
        props: { coder: data },
    };

};
export default function Detail({ coder }) {
    return (
        <>
            <h1>{coder.name}</h1>
            <p>Email: {coder.email}</p>
            <p>Website: {coder.website}</p>
            <p>Address: {coder.address.street}, {coder.address.city}</p>
            <p>Company: {coder.company.name}</p>

        </>
    )
}