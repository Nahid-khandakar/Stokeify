import React from 'react';


const Blog = () => {
    return (
        <div className='bg-gray-900 pt-16 pb-10 '>

            <div className="max-w-4xl px-8 py-4 mx-auto  bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-16 md:justify-end">
                    <img className="object-cover w-20 h-20 border-2 border-gray-50 rounded-full " alt="Testimonial avatar"
                        src="https://i.ibb.co/z6KcXNt/n-1.png" />
                </div>

                <h2 className="mt-2 text-2xl font-semibold text-amber-500  md:mt-0 md:text-3xl">
                    Difference between javascript and nodejs
                </h2>

                <p className="mt-2 mb-5 text-gray-600 dark:text-gray-200 text-justify">

                    JavaScript is a simple programming language that runs in any browser JavaScript Engine .Node JS is not a language or a special dialect of JavaScript. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.

                    All browsers have JavaScript engines that run the JavaScript of web pages. Firefox has an engine called Spidermonkey, Safari has JavaScriptCore, and Chrome has an engine called V8.
                    Node JS is simply the V8 engine bundled with some libraries to do I/O and networking, so that you can use JavaScript outside of the browser, to create shell scripts, backend services or run on hardware.
                </p>


            </div>

            <div className="max-w-4xl px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-16 md:justify-end">
                    <img className="object-cover w-20 h-20 border-2 border-gray-50 rounded-full " alt="Testimonial avatar"
                        src="https://i.ibb.co/Z2T59nD/n-2.png" />
                </div>

                <h2 className="mt-2 text-2xl font-semibold text-amber-500 md:mt-0 md:text-3xl">When should use nodejs and when should use mongodb</h2>

                <p className="mt-2 mb-5 text-gray-600 dark:text-gray-200">

                    Node is server side javascript framework. It is asynchronous and is used mainly to develop REST services which can be consumed by frontend. With node both client code and server both uses javascript language. There are many pre-built modules available.
                    <br />
                    MongoDB is a document based NoSQL database. mongoDb store our records without worrying about the data structure such as the number of fields or types of fields to store values. MongoDB documents are similar to JSON objects.mongoDB used mainly Records are stored as json documents in mongoDB.

                </p>


            </div>


            <div className="max-w-4xl px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-16 md:justify-end">
                    <img className="object-cover w-20 h-20 border-2 border-gray-50 rounded-full " alt="Testimonial avatar"
                        src="https://i.ibb.co/MsJFdPJ/n-3.png" />
                </div>

                <h2 className="mt-2 text-2xl font-semibold text-amber-500  md:mt-0 md:text-3xl">Differences between sql and nosql database</h2>

                <p className="mt-2 mb-5 text-gray-600 dark:text-gray-200">

                    sql database are categorized as relational database management system
                    nosql database are cetagorized as non-relational or distributed database system
                    <br />
                    <br />
                    sql database table is fixed rows and columns.
                    <br />
                    nosql database has no fixed row and columns . it has dynamic columns.
                    <br />
                    <br />
                    sql database used for general purpose.
                    <br />
                    nosql database used for manage large amount data , graph analysis and traversing ,predicate query patterns.
                    <br />
                    <br />
                    sql database are vertically scalable
                    <br />
                    nosql databases are horizontally scalable
                </p>


            </div>

            <div className="max-w-4xl px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-16 md:justify-end">
                    <img className="object-cover w-20 h-20 border-2 border-gray-50 rounded-full " alt="Testimonial avatar"
                        src="https://i.ibb.co/4mBkhxT/n-4.png" />
                </div>

                <h2 className="mt-2 text-2xl font-semibold text-amber-500  md:mt-0 md:text-3xl">What is the purpose of jwt and how it work</h2>

                <p className="mt-2 mb-5 text-gray-600 dark:text-gray-200">
                    JWT, or JSON Web Token,jwt is an open standard used to share security information between two parties a client and a server.In Token-based authentication , JSON Web Tokens consist of three parts separated by dots (.), which are: Header,Payload ,Signature.When a user logs in to an application with a username and password or with other information .server confirm her identity and sends back a access token containing a reference to her identity .client then includes this access token with every request to the server.REST API authentication middleware asserts the presence of a valid access token.server can further use the identity asserted by the validated token to implement more granular permission.it will be included on every single request to  REST API.
                </p>


            </div>
        </div>
    );
};

export default Blog;