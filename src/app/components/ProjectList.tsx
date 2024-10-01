import Link from "next/link"
import ColoredTextIndex from "./ColoredTextIndex"
import useStore from "../stores/store"
import StoreModelDialog from "./Dialogs/StoreModelDialog"
import type { ProjectType } from "../types"
import React from "react"

const HelloDutchyAbout = () => {
    return ( 
        <>
            <h3 className="w-fit text-lg text-slate-500"> A webshop created with Next.js</h3>
            <div className="text-slate-100 text-sm tracking-wider leading-8 opacity-95">
              Official website for the <span className="text-cyan-200">Hello Dutchy</span> brand. <br/>
              <div className="text-slate-400">
                It has all the basic elements and pages of a webshop (home page, products page, product details, cart, checkout...)<br/>
                Some of the more interesting <span className="text-slate-100">features</span>: <br/>
                <ul className="list-disc list-inside ml-2">
                    <li><span className="text-slate-100">Responsive</span> [mobile, desktop, tablet...]</li>
                    <li><span className="text-slate-100">Different Layouts</span> depending on the device</li>
                    <li><span className="text-slate-100">Adapts to product specifics.</span> In cases where products have / do not have different sizes or colors. </li>
                    <li><span className="text-slate-100">CMS controlled.</span> Content of the page changes easily with a self-made CMS.</li>
                    <li>Automated emails, order follow up, checkout to payment gateway, contact form...</li>
                </ul>
                <br/>
                <div className="flex gap-2">
                    <div>
                    This website is currently live: 
                    </div>
                    <Link href="https://hellodutchy.com" target="_blank" className="opacity-90 hover:opacity-100 transition-opacity">
                        <ColoredTextIndex text="www.hellodutchy.com" underline={true} />
                    </Link> 
                </div>
                <br/>
              </div>
            </div>
        </>
    )
}

const HelloDutchyTech = () => {
    return ( 
        <>
            <h3 className="w-fit text-lg text-slate-500">Tecnologies were used...</h3>
            <div className="text-slate-400 text-sm tracking-wider leading-8 opacity-95">
              <span className="text-slate-100">Next.js</span> [pages] as main framework. <br/>
              <span className="text-slate-100">TailwindCss</span> for styling, + a few css modules.<br/>
              <span className="text-slate-100">TRPc</span> for type safe communication between client and server.<br/>
              <span className="text-slate-100">Prisma</span> for modeling and database interactions [PostgreSQL].<br/>
              <span className="text-slate-100">Typescript</span> for type safety.<br/>
              <span className="text-slate-100">React-Spring</span> for animations.<br/>
              <span className="text-slate-100">Framer-Motion</span> for some specific scrolling utilities.<br/>
              <span className="text-slate-100">CreateContext</span> for state management. <br/>
              <span className="text-slate-100">Cookies</span> to save cart sessions. <br/>
              <span className="text-slate-100">Mollie-Api</span> to create checkouts with Mollie payments. <br/>
              etc...
                <br/>
                <br/>
                <div className="flex gap-2 text-slate-400">
                    <div>
                    Repo: 
                    </div>
                    <Link href="https://github.com/KashmirLb/hello-dutchy-public" target="_blank" className="opacity-90 hover:opacity-100 transition-opacity">
                        <ColoredTextIndex text="Github" underline={true} />
                    </Link> 
                </div>
            </div>
        </>
    )
}

const AtelierGerbrandAbout = () => {
    return ( 
        <>
            <h3 className="w-fit text-lg text-slate-500"> An Art Gallery created with Next.js</h3>
            <div className="text-slate-100 text-sm tracking-wider leading-8 opacity-95">
              Official website for art studio <span className="text-amber-200">Atelier Gerbrand</span>. <br/>
              <div className="text-slate-400">
                The site consists of a homepage with news, a gallery of artworks, a brief section about the artists, and a contact page.<br/>
                Some of the more interesting <span className="text-slate-100">features</span>: <br/>
                <ul className="list-disc list-inside ml-2">
                    <li><span className="text-slate-100">Responsive</span> [mobile, desktop, tablet...]</li>
                    <li><span className="text-slate-100">Different Layouts</span> depending on the device</li>
                    <li><span className="text-slate-100">Full screen display</span> for images of the art pieces.</li>
                    <li><span className="text-slate-100">CMS controlled.</span> Content of the page changes easily with a headless CMS.</li>
                </ul>
                <p>The site has a soft and simple design, this allows the paintings to take all the attention of the visitors.</p>
                <br/>
                <div className="flex gap-2">
                    <div>
                    This website is currently live: 
                    </div>
                    <Link href="https://ateliergerbrand.nl" target="_blank" className="opacity-90 hover:opacity-100 transition-opacity">
                        <ColoredTextIndex text="www.ateliergerbrand.nl" underline={true} />
                    </Link> 
                </div>
                <br/>
              </div>
            </div>
        </>
    )
}

const AtelierGerbrandTech = () => {
    return ( 
            <>
                <h3 className="w-fit text-lg text-slate-500">What was used here...</h3>
                <div className="text-slate-400 text-sm tracking-wider leading-8 opacity-95">
                  <span className="text-slate-100">Next.js</span> [pages] as main frontend framework. <br/>
                  <span className="text-slate-100">CSS Modules</span> for styling<br/>
                  <span className="text-slate-100">Animations and Transitions</span> through plain CSS.<br/>
                  <span className="text-slate-100">Swipe and Fullscreen</span> coded with swiper/react and JS.<br/>
                  <span className="text-slate-100">Strapi</span> as headless CMS, to add data to the database [MongoDB].<br/>
                  <span className="text-slate-100">Data Fetching</span> through plain getStaticProps and MongoClient<br/>
                  etc...
                    <br/>
                    <br/>
                    <div className="flex gap-2 text-slate-400">
                        <div>
                        Repo: 
                        </div>
                        <Link href="https://github.com/KashmirLb/Atelier-Gerbrand" target="_blank" className="opacity-90 hover:opacity-100 transition-opacity">
                            <ColoredTextIndex text="Github" underline={true} />
                        </Link> 
                    </div>
                </div>
            </>
    )
}

const OrderModelAbout = () => {

    const setDialogOpen = useStore((state) => state.setDialogOpen)

    const openDialog = () => {
        setDialogOpen(true, <StoreModelDialog />)
    }
    
    return ( 
        <>
            <h3 className="w-fit text-lg text-slate-500">A small project created with Vite and Node.js</h3>
            <div className="text-slate-100 text-sm tracking-wider leading-8 opacity-95">
              One of my first personal projects. It&apos;s purpose was to learn about <span className="text-green-200">authentication</span> and build different context within one application.<br/>
              <div className="text-slate-400">
                The Order Model has two different logins: one for the admin and one for the user. <br/>
                Different actions can be taken depending on the user&apos;s role. <br/>
                It <span className="text-slate-100">features</span>: <br/>
                <ul className="list-disc list-inside ml-2">
                    <li><span className="text-slate-100">Two authentication types</span> that load different context within the app. [user, admin]</li>
                    <li><span className="text-slate-100">Different UI and Layout</span> depending on the loaded context.</li>
                    <li><span className="text-slate-100">Permissions and Restrictions</span> applied to all endpoints</li>
                    <li><span className="text-slate-100">Interaction through Comments</span> between the user and the admin.</li>
                </ul>
                <p>The web app follows a sort of ticketing system, in this case &quot;Order(s)&quot;, which can be easily searched, filtered and accessed. These orders can have assets, users and comments linked to it.</p>
                
                <br/>
                <div className="flex gap-2">
                    <div>
                     Test: 
                    </div>
                    <div onClick={openDialog} className="opacity-90 hover:opacity-100 transition-opacity hover:cursor-pointer">
                        <ColoredTextIndex text="Order Model" underline={true} />
                    </div> 
                </div>
                <br/>
              </div>
            </div>
        </>
    )
}

const OrderModelTech = () => {
    return ( 
            <>
                <h3 className="w-fit text-lg text-slate-500">Tooling and stuff...</h3>
                <div className="text-slate-400 text-sm tracking-wider leading-8 opacity-95">
                  <span className="text-slate-100">Vite</span> [React] as main frontend framework. <br/>
                  <span className="text-slate-100">TailwindCSS</span> for styling. <br/>
                  <span className="text-slate-100">CreateContext</span> to manage the different context and states.<br/>
                  <span className="text-slate-100">Node.js</span> on the backend.<br/>
                  <span className="text-slate-100">Express</span> as routing framework.<br/>
                  <span className="text-slate-100">Mongoose</span> to connect to the database [MongoDB].<br/>
                  etc...
                    <br/>
                    <br/>
                    <div className="flex gap-2 text-slate-400">
                        <div>
                        Frontend: 
                        </div>
                        <Link href="https://github.com/KashmirLb/Order_Model_Frontend" target="_blank" className="opacity-90 hover:opacity-100 transition-opacity">
                            <ColoredTextIndex text="Order Model Frontend" underline={true} />
                        </Link> 
                    </div>
                    <div className="flex gap-2 text-slate-400">
                        <div>
                        Repo: 
                        </div>
                        <Link href="https://github.com/KashmirLb/Order_Model_Backend" target="_blank" className="opacity-90 hover:opacity-100 transition-opacity">
                            <ColoredTextIndex text="Order Model Backend" underline={true} />
                        </Link> 
                    </div>
                </div>
            </>
    )
}

const PortfolioAbout = () => {
    
    return ( 
        <>
            <h3 className="w-fit text-lg text-slate-500">Yes, I&apos;m including this portfolio</h3>
            <div className="text-slate-100 text-sm tracking-wider leading-8 opacity-95">
              Since this is my last project <span className="text-slate-400">[at this moment]</span>, I think it&apos;s important to at least give an overview to show what I&apos;m confortable with right now.<br/><br/>
              <div className="text-slate-400">
                It&apos;s <span className="text-slate-100">built with Next.js</span>, with the new App Router model.<br/>
                <br/>

                <p>You can see the <span className="text-indigo-200">technical resources</span> used by clicking on the &quot;tech&quot; button above.</p>
                <p>Make sure to have a look at my <span className="text-indigo-200">other projects</span> to see what I&apos;ve been working with over the last years.</p>
                
                <br/>
                <span className="italic">
                &quot;How the hell do I make a fancy and simple portfolio, whilst at the same time showcasing all my skills without making a complete circus out of this site?&quot; <br/>
                </span>
                 - Me right now
                <div className="flex gap-2">
                </div>
                <br/>
              </div>
            </div>
        </>
    )
}

const PortfolioTech = () => {
    return ( 
            <>
                <h3 className="w-fit text-lg text-slate-500">So, here is what I used...</h3>
                <div className="text-slate-400 text-sm tracking-wider leading-8 opacity-95">
                  <span className="text-slate-100">Next.js</span> [App Router] as main frontend framework. <br/>
                  <span className="text-slate-100">TailwindCSS</span> for styling. <br/>
                  <span className="text-slate-100">Zustand</span> for state management.<br/>
                  <span className="text-slate-100">React-Spring</span> for all the fancy animations.<br/>
                  <span className="text-slate-100">Coffee</span> to keep me running after work hours.<br/>
                </div>
                <br/>
                <div className="flex gap-2 text-slate-400">
                    <div>
                        Repo: 
                    </div>
                    <Link href="https://github.com/KashmirLb/klub-dev-public" target="_blank" className="opacity-90 hover:opacity-100 transition-opacity">
                        <ColoredTextIndex text="Github" underline={true} />
                    </Link> 
                </div>
            </>
    )
}

const ProjectList: ProjectType[] = [
    {
        name: "Order Model",
        about: <OrderModelAbout />,
        tech: <OrderModelTech />,
    },
    {
        name: "Atelier Gerbrand",
        about: <AtelierGerbrandAbout />,
        tech: <AtelierGerbrandTech />,
    },
    {
        name: "Hello Dutchy",
        about: <HelloDutchyAbout />,
        tech: <HelloDutchyTech />,
    },
    {
        name: "Portfolio",
        about: <PortfolioAbout />,
        tech: <PortfolioTech />,
    }

]

export default ProjectList