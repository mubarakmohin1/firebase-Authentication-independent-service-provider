import React, { Component } from 'react';

class Blogs extends Component {
    render() {
        return (
            <div className='container mt-4 mb-4'>
                <b>Question: Difference between Authentication and Authorization?</b>
                <p><u>Ans:</u>  Authentication is the process of verifying who someone is, whereas Authorization is the process of verifying what specific applications, files, and data a user has access to.Authentication is done before the authorization process, whereas authorization process is done after the authentication process. In authentication process, the identity of users are checked for providing the access to the system.</p>
                <b>Question: Why we use Firebase and what's it Alternative?</b>
                <p><u>Ans:</u> Firebase helps you build and run successful apps.Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase alternatives:Parse. Parse is a complete open-source application stack and backend framework that offers a collection of tools and features to help you develop your app. Back4App,AWS Amplify,Kuzzle,  Couchbase, NativeScript,  RxDB,Flutter.  </p>
                <b>Question:Without Authentication ,firebase works?</b>
                <p><u>Ans:</u>Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.</p>

            </div>
        );
    }
}

export default Blogs;