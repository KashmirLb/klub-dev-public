import ChangingTextComponent from "./components/ChangingTextComponent";
import GradientLines from "./components/GradientLines";
import Image from "next/image";
import VerticalTimeLine from "./components/VerticalTimeLine";
import ProjectDetails from "./components/ProjectDetails";
import DialogElement from "./components/Dialogs/DialogElement";
import ColoredText from "./components/ColoredText";
import Link from "next/link";
import adImage from "../../public/images/ad-b.png"
import linkedInIcon from "../../public/images/linkedin-icon.png"
import githubIcon from "../../public/images/github.png"

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-slate-950 overflow-y-scroll h-screen font-geistSans">
      <section className="flex flex-col gap-4 w-full xs:p-10 p-2 snap-start min-h-screen">
        <div className="pl-6 ">
          <h1 className="w-fit text-2xl text-slate-500"> Kashmirlub.dev </h1>
          <div className="flex flex-col flex-1 gap-20">
            <div className="w-full h-full text-white font-spaceMono p-2">
              <ChangingTextComponent text="Hi, My name is Kashmir and I'm a web developer" />
            </div>
            <div className="w-full h-full flex gap-10 items-center">
              <svg aria-label="Next.js logotype" height="22" role="img" viewBox="0 0 394 79" width="127.5"><path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" fill="white"></path><path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" fill="white"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" fill="white"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" fill="white"></path><path clipRule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fill="white" fillRule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z" fill="white"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z" fill="white"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z" fill="white">
                </path></svg>
                <Image 
                src="/images/react-icon.png"
                alt="Tailwind CSS Logo"
                width={50}
                height={50}
                />
            </div>
          </div>
        </div>
        <GradientLines />
        <div className="p-6 flex flex-col gap-6 animate-fade-in-delayed opacity-0">
          <h2 className="w-fit text-lg text-slate-500"> A brief introduction...</h2>
            <p className="text-slate-100 text-sm tracking-wider leading-8 opacity-95">
              I started creating small <span className="text-cyan-200">React.js</span> projects in <span className="text-amber-100">2021</span>. <br/>
              Small projects grew into complete websites by <span className="text-amber-100">2022</span>, where I landed my first job as a <span className="underline">full-time web developer</span>. <br/>
              <br/>
              Since then, I&apos;ve stepped over from <span className="text-cyan-200">React.js</span> to <span className="text-gray-400">Next.js</span> and continued to work on multiple websites and web applications.
              <br/>
            </p>
            <h3 className="w-fit text-lg text-slate-500 mt-4">Other tools and libraries:</h3>
            <p className="text-slate-400 text-sm tracking-wider leading-8 opacity-95">
              Most of my projects are built with <span className="text-slate-100">Tailwindcss</span> or <span className="text-slate-100">CSS Modules</span>. <br/>
              Also <span className="text-slate-100">TypeScript</span>. <br/>
              More frontend: <span className="text-slate-100">React-Spring</span>, <span className="text-slate-100">Shadcn/ui</span>, <span className="text-slate-100">Headlessui</span>... <br/>
              Some server stuff: <span className="text-slate-100">Next.js Server Components</span>, <span className="text-slate-100">TRPc</span>... <br/>
              State managers: <span className="text-slate-100">Redux</span>, <span className="text-slate-100">Zustand</span>, <span className="text-slate-100">CreateContext</span>... <br/>
              ...
            </p>
        </div>
      </section>
      <section className="xs:p-10 p-2 snap-start min-h-screen flex flex-wrap justify-between">
        <VerticalTimeLine />
        <ProjectDetails />        
      </section>
      <section className="xs:p-10 p-2 snap-start min-h-screen text-slate-400 text-sm tracking-wider leading-8 opacity-95">
        <h2 className="w-fit text-2xl text-slate-500 mb-10"> What else...?</h2>
        <p className="mt-2">
          The above are my side projects / jobs.
        </p>
        <div>
          My current <span className="text-slate-100">full-time job</span> consists of:
          <ul className="list-disc list-inside ml-2 mt-2">
            <li><span className="text-slate-100">Developing a multi-domain user management</span> web app. <br/>
              <div className="ml-10 mt-4">This is my main task. <span className="text-slate-100">Currently as full-stack</span>. It&apos;s a pretty big project I&apos;m leading within a very small team.</div>
              <div className="ml-10">It connects to Active Directory Domain Controllers, Exchange Servers, third party applications...</div>
              <div className="ml-10 mb-4">I&apos;m not gonna get deeper into this, but it&apos;s a pretty interesting project. Don&apos;t hesitate to ask if we get in touch.</div>
              <div >
                <Image
                  src={adImage}
                  alt="Active Directory"
                  width={200}
                  height={200}
                  className="ml-10 mb-4"
                />
              </div>
             </li>
            <li> <span className="text-slate-100">Maintaining applications</span>. Any web app used within the company, any language, any framework [.NET, jQuery / JS, PHP...]</li>
          </ul>
        </div>
        <div>
          <h3 className="w-fit text-lg text-slate-500 mt-8">Wait... AD? Exchange? I thought you were a web developer?</h3>
          <br/>
          <p>I&apos;ve worked in the IT industry for over 6 years now.</p>
          <div>
            On top of my coding skills, I also have know quite a lot about:
            <ul className="list-disc list-inside ml-2 mt-2">
                <li><span className="text-slate-100">Active Directory and LDAP</span> [and how to connect, management, security groups and policies, user base and attributes...] </li>
                <li><span className="text-slate-100">Server Connections</span> [rules, types of connections...] </li>
                <li><span className="text-slate-100">Remote Connections</span> [WSMAN, Powershell sessions, RDP...] </li>
                <li>More IT stuff...</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="xs:p-10 p-2 snap-start min-h-screen flex flex-col">
        <h2 className="w-fit text-2xl text-slate-500 mb-10"> Interesting... Tell me more!</h2>
          <div className="text-slate-400 text-sm tracking-wider leading-8 opacity-95">
            <p>
              Does this look like a good fit?
            </p>
            <div>
              contact me: <ColoredText text="kashmirlubdev@gmail.com" color="orange" />
            </div>
          </div>
          <div className="text-slate-400 text-sm tracking-wider leading-8 opacity-95 my-10">
            <p>
              Need a bit more background?
            </p>
            <div className="flex flex-col gap-4">
              <div>
              Check out my <span className="text-slate-100">profiles</span>:

              </div>
              <Link className="flex gap-4 items-center" href="https://github.com/KashmirLb" target="_blank">
                <Image 
                  src={githubIcon}
                  alt="Github"
                  width={35}
                  height={50}
                />
                <ColoredText text="Github" color="purple" />
              </Link>
              <Link className="flex gap-4 items-center" href="https://www.linkedin.com/in/kashmir-lub/" target="_blank">
                <Image 
                  src={linkedInIcon}
                  alt="Linkedin"
                  width={35}
                  height={50}
                />
                <ColoredText text="Linkedin" color="blue" />
              </Link>
            </div>
          </div>
          <h3 className="w-fit text-lg text-slate-500 my-8">Thank you for your visit!</h3>
          <div className="flex-1 flex items-end w-full h-full text-slate-400">
            kashmirlub.dev
          </div>
      </section>
      <DialogElement />
    </main>
  );
}
