import React from 'react';
import './App.css';

function Header() {
    return (
        <header>
            <h1>My Blog</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

function Article({ title, date, imgSrc, content }) {
    return (
        <article>
            <header>
                <h2>{title}</h2>
                <p>Posted on {date}</p>
            </header>
            <img src={imgSrc} alt="Blog Image" />
            <p>{content}</p>
            <a href="#" className="read-more">Read More</a>
        </article>
    );
}

function Main() {
    return (
        <main>
            <Article
                title="My First Blog Post"
                date="January 1, 2022"
                imgSrc="https://picsum.photos/id/10/400/250"
                content="Forests are one of the most important ecosystems on our planet. They are not only a source of oxygen and a habitat for countless animals and plants, but they also help regulate the Earth's climate by storing carbon. Unfortunately, deforestation and forest degradation have become major global issues, leading to the loss of biodiversity and contributing to climate change. It's crucial that we take action to protect and restore our forests. We can all play a part by supporting sustainable forestry practices, reducing our consumption of forest products, and advocating for policies that protect and restore our precious forests."
            />
            <Article
                title="My Second Blog Post"
                date="February 1, 2022"
                imgSrc="https://picsum.photos/id/20/400/250"
                content="A comfortable and functional workspace can greatly enhance productivity and creativity. It's important to create a dedicated space for work that is separate from the rest of your living space. Consider investing in a comfortable chair, a sturdy desk, and proper lighting. Organize your workspace with storage solutions that work for you and keep your desk clutter-free. Adding personal touches such as photos or plants can also help create a welcoming atmosphere. Whether you work from home or in an office, a well-designed workspace can make a big difference in your overall work experience."
            />
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <p>&copy; 2022 My Blog. All rights reserved.</p>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
