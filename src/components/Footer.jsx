import './footer.css'
const Footer = () => {
    return (
        <footer>
             <a href="https://github.com/danmac121"  className="">
                 
                 <img src="/public/git.png" alt="GitHub" />
             </a>
             <a href="https://www.linkedin.com/in/daniel-macdonald-289946280/"  className="">
                 
                 <img src="/public/linked.png" alt="linked-in" />
             </a>
             <a href="https://stackoverflow.com/users/22648176/dan-mac"  className="">
                 
                 <img src="/public/stack.png" alt="Stack Overflow" />
             </a>
        </footer>
    );
};

export default Footer;